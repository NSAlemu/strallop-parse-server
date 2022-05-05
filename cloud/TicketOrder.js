const {createPersonalInformation, updatePersonalInformation} = require("./PersonalInformation");
const {
    authenticateOrganizationThroughEvent, authenticateOrganizationThroughOrder,
    authenticateOrganizationThroughTicketOrder
} = require("./authentication");
Parse.Cloud.define("getAllTicketOrders", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);
    const eventPromise = new Parse.Query(Parse.Object.extend('Event')).include("address")
        .get(params.eventId, {useMasterKey: true})

    const ticketTypesPromise = new Parse.Query(Parse.Object.extend('TicketType'))
        .equalTo('event', Parse.Object.extend("Event").createWithoutData(params.eventId))
        .ascending('name')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
    const innerCancelledTicketOrderQuery = new Parse.Query( Parse.Object.extend("TicketStatus"));
    innerCancelledTicketOrderQuery.equalTo("statusName", "Cancelled");
    let ticketOrdersPromise = new Parse.Query(Parse.Object.extend('TicketOrder'))
        .doesNotMatchQuery('status',innerCancelledTicketOrderQuery)
        .descending('createdAt')
        .equalTo('event', Parse.Object.extend("Event").createWithoutData(params.eventId))
        .include('event')
        .include('order')
        .include('status')
        .include('ticketType')
        .include('attendeeInfo')
        .include('attendeeInfo.address')
        .find({useMasterKey: true}).then(async value => {
            return value
        }, (error) => {
            throw error
        })
    const promises = await Promise.all([ticketOrdersPromise, eventPromise, ticketTypesPromise]).then(value => {
        return value
    }, (error) => {
        throw error
    })
    return {ticketOrders: promises[0], event: promises[1], ticketTypes: promises[2]}
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAnyUserRoles: ['manageOrders', 'viewAttendees']
});

Parse.Cloud.define("getAllTicketOrdersForOrder", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughOrder(params.orderId, request.user.id);

    const parseEvent = await new Parse.Query(Parse.Object.extend('Order'))
        .include('ticketType')
        .include('event.name')
        .get(params.orderId, {useMasterKey: true})
    return parseEvent.relation("orderedTickets").query()
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            return value
        }, error => {
            throw error
        })
}, {
    fields: ['orderId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("addTicketOrderToOrder", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughOrder(params.orderId, request.user.id);

    const parseOrder = await new Parse.Query(Parse.Object.extend('Order'))
        .get(params.orderId, {useMasterKey: true})

    const newTicketOrder = new (Parse.Object.extend("TicketOrder"))();
    newTicketOrder.setACL(new Parse.ACL())
    newTicketOrder.set("attendeeInfo", await createPersonalInformation(params.attendeeInfo))

    const savedTicketOrder = newTicketOrder.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error
    })
    parseOrder.relation("orders").add(savedTicketOrder)
    parseOrder.save(null, {useMasterKey: true}).then(value => {
    }, error => {
        throw error
    })
    return savedTicketOrder;
}, {
    fields: ['orderId', 'attendeeInfo'],
    requireUser: true,
    requireAllUserRoles: ['addAttendees']
});

Parse.Cloud.define("getTicketOrder", async (request) => {
    await authenticateOrganizationThroughTicketOrder(request.params.ticketOrderId, request.user.id);

    return new Parse.Query(Parse.Object.extend('TicketOrder'))
        .get(request.params.ticketOrderId, {useMasterKey: true})
        .then(async value => {
            return value
        }, error => {
            throw error;
        })

}, {
    fields: ['ticketOrderId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("updateTicketOrder", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughTicketOrder(request.params.ticketOrder.id, request.user.id);

    return await this.updateTicketOrder(params.ticketOrder.id, params.selectedStatusId, params.selectedTicketTypeId, params.ticketOrder.attendeeInfo).then(value => {
        return value
    }, error => {
        throw error;
    })
}, {
    fields: ['ticketOrder'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("updateTicketOrderStatus", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughTicketOrder(request.params.ticketOrder.id, request.user.id);
    const parseTicketOrder = await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .get(params.ticketOrderId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        });

    parseTicketOrder.set('status', Parse.Object.extend('TicketStatus').createWithoutData(params.selectedStatusId));
    return await parseTicketOrder.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })
}, {
    fields: ['ticketOrderId', 'selectedStatusId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("deleteTicketOrder", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

Parse.Cloud.define("getAttendeeList", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});


Parse.Cloud.define("downloadAttendeeCSV", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrders']
});

exports.createTicketOrder = async (statusId, selectedTicketTypeId, attendeeInfo, eventId, orderId) => {

    const orderedTicketObject = new (Parse.Object.extend('TicketOrder'))();
    orderedTicketObject.setACL(new Parse.ACL())
    orderedTicketObject.set('status', Parse.Object.extend('TicketStatus').createWithoutData(statusId));
    orderedTicketObject.set('event', Parse.Object.extend('Event').createWithoutData(eventId));
    orderedTicketObject.set('order', Parse.Object.extend('Order').createWithoutData(orderId));
    orderedTicketObject.set('ticketType', Parse.Object.extend('TicketType').createWithoutData(selectedTicketTypeId));
    orderedTicketObject.set('attendeeInfo', attendeeInfo);

    return orderedTicketObject.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        console.log('\n\nerror', JSON.stringify(error), '\n\n',)
        throw error;
    })
}

exports.updateTicketOrder = async (id, statusId, ticketTypeId, attendeeInfo) => {

    const parseTicketOrder = await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .get(id, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        });

    if (statusId)
        parseTicketOrder.set('status', Parse.Object.extend('TicketStatus').createWithoutData(statusId));
    if (ticketTypeId)
        parseTicketOrder.set('ticketType', Parse.Object.extend('TicketType').createWithoutData(ticketTypeId));

    await updatePersonalInformation(attendeeInfo.id, attendeeInfo).then(value => {
        return value
    }, (error) => {
        throw error
    })

    return parseTicketOrder.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })
}
