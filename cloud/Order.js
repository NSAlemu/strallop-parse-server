const {createPersonalInformation, updatePersonalInformation} = require("./PersonalInformation");
const {createTicketOrder} = require("./TicketOrder");
const {authenticateOrganizationThroughEvent, authenticateOrganizationThroughOrder} = require("./authentication");
const email = require("./Email");

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
        .descending('createdAt')
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

    const completedStatus = await new Parse.Query(Parse.Object.extend('OrderStatus'))
        .equalTo('statusname', 'Completed').first({useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })
    const ticketStatusId = (await new Parse.Query(Parse.Object.extend('TicketStatus'))
        .equalTo('statusName', 'Registered').first()).id;
    const newOrder = new (Parse.Object.extend("Order"))();
    newOrder.setACL(new Parse.ACL())
    newOrder.set("buyerInfo", await createPersonalInformation(params.order.buyerInfo));
    newOrder.set("event", Parse.Object.extend("Event").createWithoutData(params.eventId));
    newOrder.set('status', completedStatus);

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
    requireUser: true,
    requireAllUserRoles: ['manageOrders', 'addAttendees']
});

Parse.Cloud.define("getOrderWithTicketOrders", async (request) => {
    await authenticateOrganizationThroughOrder(request.params.orderId, request.user.id);

    const orderPromise = new Parse.Query(Parse.Object.extend('Order'))
        .include('event')
        .include('event.address')
        .include('buyerInfo')
        .include('status')
        .get(request.params.orderId, {useMasterKey: true})

    const ticketOrdersPromise = new Parse.Query(Parse.Object.extend('TicketOrder'))
        .include('ticketType')
        .include('attendeeInfo')
        .include('status')
        .equalTo('order', Parse.Object.extend('Order').createWithoutData(request.params.orderId))
        .find({useMasterKey: true})

    const promises = await Promise.all([orderPromise, ticketOrdersPromise]).then(value => {
        return value
    }, (error) => {
        throw error
    })
    const order = promises[0], ticketOrders = promises[1]
    return {order, ticketOrders}
}, {
    fields: ['orderId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("getOrder", async (request) => {
    await authenticateOrganizationThroughOrder(request.params.orderId, request.user.id);

    return await new Parse.Query(Parse.Object.extend('Order'))
        .include('event')
        .include('buyerInfo')
        .include('status')
        .get(request.params.orderId, {useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })
}, {
    fields: ['orderId'],
    requireUser: true,
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
    return await new Parse.Query(Parse.Object.extend('Order')).get(params.order.id, {useMasterKey: true})
        .then(value => {
            return value;
        }, (error) => {
            throw error
        })
}, {
    fields: ['order'],
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("setCheckInTicketOrderStatus", async (request) => {
    const checkInStatus = await new Parse.Query(Parse.Object.extend('TicketStatus'))
        .equalTo('statusName', 'Checked In').find({useMasterKey: true})
        .then(async value => {
            if (value.length === 0) {
                throw new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'Could not find "checked in" ticket status')
            }
            return value[0]
        }, error => {
            throw error;
        })
    const ticketOrder = await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .include('status')
        .get(request.params.ticketOrderId, {useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })
    if (ticketOrder.get('status').id === checkInStatus.id) {
        throw new Parse.Error(Parse.Error.VALIDATION_ERROR, 'Attendee already Checked In')
    } else {
        ticketOrder.set('status', checkInStatus);
        return await ticketOrder.save(null, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
    }
}, {
    fields: ['ticketOrderId'],
    requireAllUserRoles: ['checkinAttendees']
});

Parse.Cloud.define("setRefundOrder", async (request) => {
    const orderId = request.params.orderId;
    const isRefund = request.params.setRefunded;
    const orderPromise = new Parse.Query(Parse.Object.extend('Order')).get(orderId, {useMasterKey: true});
    const refundedOrderStatusPromise = new Parse.Query(Parse.Object.extend('OrderStatus'))
        .equalTo('statusname', isRefund ? 'Refunded' : 'Completed').first({useMasterKey: true})
    const cancelledTicketStatusPromise = new Parse.Query(Parse.Object.extend('TicketStatus'))
        .equalTo('statusName', isRefund ? 'Cancelled' : 'Registered').first({useMasterKey: true})
    const ticketOrdersPromise = new Parse.Query(Parse.Object.extend('TicketOrder'))
        .equalTo('order', Parse.Object.extend('Order').createWithoutData(orderId))
        .find({useMasterKey: true})
    const promises = await Promise.all([orderPromise, ticketOrdersPromise, refundedOrderStatusPromise, cancelledTicketStatusPromise]).then(value => {
        return value
    }, (error) => {
        throw error
    })
    const order = promises[0], ticketOrders = promises[1], refundedOrderStatus = promises[2],
        cancelledTicketStatus = promises[3];
    order.set('status', refundedOrderStatus);
    ticketOrders.forEach(ticketOrder => {
        ticketOrder.set('status', cancelledTicketStatus);
    })

    await Parse.Object.saveAll([...ticketOrders, order], {useMasterKey: true})
    return order;
}, {
    fields: ['orderId', 'setRefunded'],
    requireUser: true,
    requireAllUserRoles: ['issueRefunds']
});

Parse.Cloud.define("deleteOrder", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: [],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});
Parse.Cloud.define("sendOrderConfirmation", async (request) => {
    const orderId = request.params.orderId;
    await authenticateOrganizationThroughOrder(orderId, request.user.id);
    await email.sendOrderConfirmationEmail(orderId).then(value => {

    }, (error)=>{
        throw error;
    });
    return true
}, {
    fields: ['orderId'],
    requireUser: true,
    requireAllUserRoles: ['resendConfirmationEmails']
});
Parse.Cloud.afterSave("Order", async (request) => {
    const mod_order = request.object;
    const orig_order = request.original;

    if ((mod_order && orig_order) && (mod_order.get("status") !== orig_order.get("status"))) {
        await email.sendOrderConfirmationEmail(request.object.id);
    }
})

