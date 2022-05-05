const {authenticateOrganizationThroughEvent} = require("./authentication");
Parse.Cloud.define("createMultipleTickets", async (request) => {
    const eventId = request.params.eventId;
    for (let ticket of request.params.tickets) {
        let newTicket = new (Parse.Object.extend('TicketType'))();
        newTicket.setACL(new Parse.ACL())
        newTicket.set('name', ticket.name);
        newTicket.set('capacity', ticket.capacity);
        newTicket.set('price', ticket.price);
        newTicket.set('salesStartDate', new Date(ticket.salesStartDate));
        newTicket.set('salesEndDate', new Date(ticket.salesEndDate));
        newTicket.set('requireAttendeeInfo', ticket.requireAttendeeInfo);
        newTicket.set('attendeeLimitPerOrder', ticket.attendeeLimitPerOrder);
        newTicket.set('event', Parse.Object.extend('Event').createWithoutData(eventId));
        await newTicket.save(null, {useMasterKey: true});
        await new Parse.Query(Parse.Object.extend('Event')).include('ticketType').get(eventId, {useMasterKey: true}).then(async value => {
            value.relation('ticketTypes').add(newTicket);
            await value.save(null, {useMasterKey: true});
        });
    }
}, {
    fields: ['eventId', 'tickets']
});


Parse.Cloud.define("getBasicEventReport", async (request) => {
    const params = request.params
    const eventId = request.params.eventId;

    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const event = await new Parse.Query(Parse.Object.extend("Event")).get(eventId, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error
    });
    return {
        orderShareByTicketType: await orderShareByTicketType(eventId),
        orderSales: await ticketOrderSales(eventId),
        last10Orders: await last10Orders(eventId),
        event
    }
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['basicEventReport']
});

orderShareByTicketType = async (eventId) => {
    const data = [];
    const labels = [];
    const ticketTypeIds = [];
    const ticketTypeCapacity = [];
    const ticketTypePrice = [];
    const totalTicketSaleEnd = [];
    const orderCount = [];
    let totalTicketOrderCount = 0
    let totalTicketCapacity = 0
    const ticketOrders = await new Parse.Query(Parse.Object.extend("TicketOrder"))
        .equalTo("event", Parse.Object.extend("Event").createWithoutData(eventId))
        .include('ticketType')
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
    const ticketTypes = await new Parse.Query(Parse.Object.extend("TicketType"))
        .equalTo("event", Parse.Object.extend("Event").createWithoutData(eventId))
        .ascending('name')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
    ticketTypes.forEach(ticket => {
        labels.push(ticket.get('name'))
        ticketTypeIds.push(ticket.id);
        orderCount.push(0);
        ticketTypeCapacity.push(ticket.get('capacity'))
        ticketTypePrice.push(ticket.get('price'))
        totalTicketSaleEnd.push(ticket.get('salesEndDate'))
        totalTicketCapacity += ticket.get('capacity')
    })
    ticketOrders.forEach(ticketOrder => {
        totalTicketOrderCount++;
        orderCount[ticketTypeIds.indexOf(ticketOrder.get('ticketType').id)]++;
    })
    return {
        labels,
        ticketTypeIds,
        ticketTypeCapacity,
        ticketTypePrice,
        totalTicketSaleEnd,
        orderCount,
        totalTicketOrderCount,
        totalTicketCapacity
    }
}

ticketOrderSales = async (eventId) => {
    const data = []
    let firstTicketDate = new Date();
    const ticketOrders = await new Parse.Query(Parse.Object.extend("TicketOrder"))
        .equalTo("event", Parse.Object.extend("Event").createWithoutData(eventId))
        .include('ticketType')
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
    ticketOrders.forEach(ticketOrder => {
        if (firstTicketDate.getTime() > ticketOrder.createdAt.getTime()) {
            firstTicketDate = ticketOrder.createdAt;
        }
        data.push({
            id: ticketOrder.id,
            soldDate: ticketOrder.createdAt,
            ticketTypeId: ticketOrder.get('ticketType').id,
            ticketTypeName: ticketOrder.get('ticketType').get('name')
        })
    })

    return {
        firstTicketDate,
        data
    }
}

last10Orders = async (eventId) => {
    const orders = []
    const parseOrders = await new Parse.Query(Parse.Object.extend("Order"))
        .equalTo("event", Parse.Object.extend("Event").createWithoutData(eventId))
        .limit(10)
        .include('ticketType')
        .include('buyerInfo')
        .include('status')
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        })
    parseOrders.forEach(order => {
        orders.push({
            id: order.id,
            purchaseDate: order.createdAt,
            firstName: order.get('buyerInfo').get('firstName'),
            middleName: order.get('buyerInfo').get('middleName'),
            lastName: order.get('buyerInfo').get('lastName'),
            status: order.get('status').get('statusname')
        })
    })
    return orders;
}
