const {createPersonalInformation, updatePersonalInformation} = require("./PersonalInformation");
const {createTicketOrder} = require("./TicketOrder");
const {authenticateOrganizationThroughEvent, authenticateOrganizationThroughOrder} = require("./authentication");
const {response} = require("express");
Parse.Cloud.define("getAllOrders", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .get(params.eventId, {useMasterKey: true})
    const orderedTickets = [];
    const orders = await parseEvent.relation("orders").query()
        .include('status')
        .include('event')
        .include('buyerInfo')
        .include('buyerInfo.address')
        .find({useMasterKey: true}).then(async value => {
            for (const order of value) {
                orderedTickets.push(await order.relation('orderedTickets').query().includeAll().find({useMasterKey: true}))
            }
            return value
        }, error => {
            throw error
        })

    return {orders, orderedTickets, event: parseEvent};
}, {
    requireUser: true,
    fields: ['eventId'],
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("createOrder", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const user = await new Parse.Query(Parse.User)
        .get(request.user.id, {useMasterKey: true})
    const newOrder = new (Parse.Object.extend("Order"))();
    newOrder.setACL(new Parse.ACL())
    newOrder.set("buyerInfo", await createPersonalInformation(params.order.buyerInfo));
    newOrder.set("event", Parse.Object.extend("Event").createWithoutData(params.eventId));
    newOrder.set('status', Parse.Object.extend('OrderStatus')
        .createWithoutData(params.order.status.id));
    const ticketStatusId = (await new Parse.Query(Parse.Object.extend('TicketStatus'))
        .equalTo('statusName', 'Registered').first()).id;

    return newOrder.save(null, {useMasterKey: true}).then(async orderObject => {
        new Parse.Query('Event').get(params.eventId, {useMasterKey: true})
            .then(async value => {
                value.relation('orders').add(orderObject);
                await value.save(null, {useMasterKey: true});
            }, (error) => {
                throw error
            })
        const ticketOrders = [];
        for (const ticket of params.order.orderedTickets) {
            ticketOrders.push(await createTicketOrder(ticketStatusId, params.selectedTicketTypeId,
                await createPersonalInformation(ticket.attendeeInfo),
                params.eventId, orderObject.id))
        }
        orderObject.relation('orderedTickets')
            .add(ticketOrders);
        return await orderObject.save(null, {useMasterKey: true}).then(order => {
            return order
        }, (error) => {
            throw error
        });
    }, (error) => {
        throw error
    });
}, {
    fields: ['eventId', 'order', 'selectedTicketTypeId'],
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("getOrder", async (request) => {
    await authenticateOrganizationThroughOrder(request.params.orderId, request.user.id);

    return await new Parse.Query(Parse.Object.extend('Order'))
        .include('event')
        .get(request.params.orderId, {useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })
}, {
    fields: ['orderId'],
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("updateOrder", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughOrder(params.order.id, request.user.id);

    await updatePersonalInformation(params.order.buyerInfo.id, params.order.buyerInfo).then(value => {
        return value
    }, (error) => {
        throw error
    })
    return await new Parse.Query(Parse.Object.extend('Order')).get(params.order.id,{useMasterKey: true})
        .then(value => {
            return value;
        }, (error)=>{
            throw error
        })
}, {
    fields: ['order'],
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("setCheckInTicketOrderStatus", async (request) => {
    const checkInStatus =  await new Parse.Query(Parse.Object.extend('TicketStatus'))
        .equalTo('statusName', 'Checked In').find({useMasterKey: true})
        .then(async value => {
            if(value.length===0){
                throw new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'Could not find "checked in" ticket status')
            }
            return value[0]
        }, error => {
            throw error;
        })
    const ticketOrder =  await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .include('status')
        .get(request.params.ticketOrderId, {useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })
    if(ticketOrder.get('status').id === checkInStatus.id){
        throw new Parse.Error(Parse.Error.VALIDATION_ERROR, 'Attendee already Checked In')
    }else{
        ticketOrder.set('status', checkInStatus);
        return await ticketOrder.save(null, {useMasterKey: true}).then(value => {
            return value
        }, (error)=>{
            throw error
        })
    }
}, {
    fields: ['ticketOrderId'],
    requireAllUserRoles: ['checkinAttendees']
});


Parse.Cloud.define("deleteOrder", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: [],
    requireAllUserRoles: ['manageOrders']
});

