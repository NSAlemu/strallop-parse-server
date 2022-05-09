//include how many people have bought the tickets

const {basicEventDetails} = require("./Event");
const {authenticateOrganizationThroughEvent} = require("./authentication");
Parse.Cloud.define("getAllTicketTypes", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);
    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .get(params.eventId, {useMasterKey: true}).then(value => {
            return value
        }, error => {
            throw error
        })
    return {
        ticketTypes: await parseEvent.relation("ticketTypes").query()
            .ascending('name')
            .find({useMasterKey: true}).then(value => {
                return value
            }, error => {
                throw error
            }),
        event: await basicEventDetails(params.eventId, request.user.id)
    }
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAnyUserRoles: ['manageTickets','manageOrders']
});

//include how many people have bought the tickets
Parse.Cloud.define("addTicketType", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);
    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .get(params.eventId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw  error
        })
    const newTicketType = new (Parse.Object.extend("TicketType"))();
    newTicketType.setACL(new Parse.ACL())
    newTicketType.set("salesStartDate", params.ticket.salesStartDate)
    newTicketType.set("salesEndDate", params.ticket.salesEndDate)
    newTicketType.set("price", params.ticket.price)
    newTicketType.set("name", params.ticket.name)
    newTicketType.set("capacity", params.ticket.capacity)
    newTicketType.set("event", parseEvent)
    newTicketType.set("requireAttendeeInfo", params.ticket.requireAttendeeInfo)
    newTicketType.set("attendeeLimitPerOrder", params.ticket.attendeeLimitPerOrder)
    const savedTicketType = await newTicketType.save(null, {useMasterKey: true}).then(value => {
        return value;
    }, error => {
        throw error
    })
    parseEvent.relation("ticketTypes").add(savedTicketType)
    parseEvent.save(null, {useMasterKey: true}).then(value => {
    }, error => {
        throw error;
    })
    return savedTicketType
}, {
    fields: ['eventId', 'ticket'],
    requireUser: true,
    requireAllUserRoles: ['manageTickets']
});

Parse.Cloud.define("getTicketType", async (request) => {
    return new Parse.Query(Parse.Object.extend('TicketType'))
        .get(request.params.ticketTypeId, {useMasterKey: true})
        .then(value => {
            return value
        }, error => {
            throw error;
        })
}, {
    fields: ['ticketTypeId'],
    requireUser: true,
    requireAllUserRoles: ['manageTickets']
});

Parse.Cloud.define("updateTicketType", async (request) => {
    const params = request.params
    const newTicket = await new Parse.Query(Parse.Object.extend('TicketType'))
        .include('event').get(params.ticket.id, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw  error
        })
    await authenticateOrganizationThroughEvent(newTicket.get('event').id, request.user.id);
    const fieldsToUpdate = ['name', 'capacity', 'price',
        'salesStartDate', 'salesEndDate', 'requireAttendeeInfo',
        'attendeeLimitPerOrder']

    fieldsToUpdate.forEach(field => params.ticket[field] === undefined ? "" : newTicket.set(field, params.ticket[field]))

    return await newTicket.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })

}, {
    fields: ['eventId', 'ticket'],
    requireUser: true,
    requireAllUserRoles: ['manageTickets']
});

//If it contains no orders
Parse.Cloud.define("deleteTicketTypes", async (request) => {
    const params = request.params;
    await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .equalTo('ticketType', Parse.Object.extend('TicketType').createWithoutData(params.ticketId))
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            if (value.length > 0)
                throw new Parse.Error(Parse.Error.VALIDATION_ERROR,
                    'Found ' + value.length + ' attendees with this ticket. Please assign them new Tickets before deleting')
        }, (error) => {
            throw  error
        })
    const ticketType = await new Parse.Query(Parse.Object.extend('TicketType'))
        .get(params.ticketId, {useMasterKey: true}).then(async value => {
            return value;
        }, (error) => {
            throw error
        });
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);
    ticketType.destroy({useMasterKey: true}).then(value => {
    }, error => {
        throw error
    });

    return true
}, {
    fields: ['eventId', 'ticketId'],
    requireUser: true,
    requireAllUserRoles: ['manageTickets']
});
