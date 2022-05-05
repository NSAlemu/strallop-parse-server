const {createAddress} = require("./Address");
const {authenticateOrganizationThroughEvent} = require("./authentication");
const {createEmail} = require("./Email");
const {createDefaultBudgetCategories} = require("./BudgetCategory");
Parse.Cloud.define("getAllEvents", async (request) => {
    const fieldsToRemove = ['isDraft', 'createdBy', 'isPrivate',
        'confirmationEmail', 'reminderEmail', 'ticketTypes', 'orders',
        'budgets', 'documents']

    return await new Parse.Query(Parse.Object.extend("Event"))
        .equalTo("organization", request.user.get('organization'))
        .exclude(fieldsToRemove)
        .descending('createdAt')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
}, {
    requireUser: true,
});

Parse.Cloud.define("createEvent", async (request) => {
    const params = request.params

    const user = await new Parse.Query(Parse.User)
        .get(request.user.id, {useMasterKey: true})

    console.log('\n\n\n NEW EVENT: ', JSON.stringify(params),"\n\n\n")
    const newEvent = new (Parse.Object.extend("Event"))();
    newEvent.setACL(new Parse.ACL())
    newEvent.set("locationName", params.locationName);
    newEvent.set("isPublishScheduled", params.isPublishScheduled);
    newEvent.set("name", params.name);
    newEvent.set("startDate", new Date(params.startDate));
    newEvent.set("endDate", new Date(params.endDate));
    newEvent.set("isPrivate", params.isPrivate);
    newEvent.set("organization", user.get("organization"));
    newEvent.set("description", params.description);
    newEvent.set("isDraft", params.isDraft);
    newEvent.set("isOnline", params.isOnline);
    newEvent.set("publishDate", params.publishDate);
    newEvent.set("createdBy", user);
    if (params.coverImage) {
        const file = new Parse.File("coverImage.png", {base64: params.coverImage});
        const parseFile = await file.save({useMasterKey: true})
        parseEvent.set('coverImage', parseFile)
    }
    newEvent.set("address", await createAddress(params.address));
    newEvent.set("status", (Parse.Object.extend('EventStatus')).createWithoutData(params.status.id))

    await newEvent.save(null, {useMasterKey: true}).then(async event => {
        return event;
    }, (error) => {
        throw error
    });
    newEvent.set('reminderEmail', await createEmail(newEvent.id));
    newEvent.set('confirmationEmail', await createEmail(newEvent.id));
    await createDefaultBudgetCategories(newEvent.id)
    await newEvent.save(null, {useMasterKey: true}).then(async event => {
    }, (error) => {
        throw error
    });
    return newEvent
}, {
    fields: ['address', 'name', 'startDate', 'endDate', 'isPrivate', 'description', 'isDraft'],
    requireUser: true,
    requireAllUserRoles: ['createEvents']
});

Parse.Cloud.define("getEvent", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const fieldsToSelect = ['name', 'startDate', 'endDate',
        'description', 'coverImage', 'address', 'status']
    return await new Parse.Query(Parse.Object.extend('Event'))
        .select(fieldsToSelect)
        .include(["address", "status"]).get(params.eventId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
}, {
    fields: ['eventId'],
    requireUser: true,
});

//include event status
Parse.Cloud.define("getEventDetails", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEventQuery = new Parse.Query(Parse.Object.extend('Event'))
        .include("address")


    const fieldsToRemove = ['isDraft', 'createdBy', 'isPrivate',
        'confirmationEmail', 'reminderEmail', 'ticketTypes', 'orders',
        'budgets', 'documents']
    fieldsToRemove.forEach(field => parseEventQuery.exclude(field))

    return await parseEventQuery.get(params.eventId, {useMasterKey: true})
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['editEventDetails']
});
Parse.Cloud.define("getPublishDetails", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEventQuery = new Parse.Query(Parse.Object.extend('Event'))
        .include("address")

    const fieldsToRemove = ['createdBy', 'confirmationEmail', 'reminderEmail', 'ticketTypes', 'orders',
        'budgets', 'documents']
    fieldsToRemove.forEach(field => parseEventQuery.exclude(field))

    return await parseEventQuery.get(params.eventId, {useMasterKey: true})
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageEventStatus']
});

//do not update event status
Parse.Cloud.define("updateEventDetails", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .include('address')
        .get(params.eventId, {useMasterKey: true})
    const parseAddress = parseEvent.get('address')
    const fieldsToUpdate = ['startDate', 'endDate', 'name',
        'description', 'isOnline', 'isPrivate',
        'budgets', 'documents']

    fieldsToUpdate.forEach(field => params[field] === undefined ? "" : parseEvent.set(field, params[field]))
    parseEvent.set('description', params.description)
    console.log('\n\n\n', params.coverImage, '\n\n\n')
    const addressFieldsToUpdate = ['name', 'address1', 'address2', 'city', 'country']
    addressFieldsToUpdate.forEach(field => !params.address || params.address[field] === undefined ? "" : parseAddress.set(field, params.address[field]))
    parseAddress.save(null, {useMasterKey: true});

    if (params["selectedStatusId"])
        parseEvent.set("status", (Parse.Object.extend('EventStatus')).createWithoutData(params["selectedStatusId"]))

    if (parseEvent.get('coverImage')) {
        await parseEvent.get('coverImage').destroy({useMasterKey: true});
    }

    if (params.coverImage) {
        const file = new Parse.File("coverImage.png", {base64: params.coverImage});
        const parseFile = await file.save({useMasterKey: true})
        parseEvent.set('coverImage', parseFile)
    } else {
        parseEvent.unset('coverImage')
    }


    return await parseEvent.save(null, {useMasterKey: true}).then(value => {
        const fieldsToDelete = ['isDraft', 'createdBy', 'isPrivate',
            'confirmationEmail', 'reminderEmail', 'ticketTypes', 'orders',
            'budgets', 'documents']

        //Do NOT save "value"
        fieldsToDelete.forEach(field => value.set(field, undefined))

        return value
    }, error => {
        throw error
    })
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAnyUserRoles: ['editEventDetails', 'manageEventStatus']
});

//do not update event status
Parse.Cloud.define("updateBasicEventDetails", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .get(params.eventId, {useMasterKey: true})
    parseEvent.set('name', params.name)
    parseEvent.set('startDate', params.startDate)
    parseEvent.set('endDate', params.endDate)
    parseEvent.set('status', Parse.Object.extend('EventStatus').createWithoutData(params.selectedStatusId))


    return await parseEvent.save(null, {useMasterKey: true}).then(value => {
        const fieldsToDelete = ['isDraft', 'createdBy', 'isPrivate',
            'confirmationEmail', 'reminderEmail', 'ticketTypes', 'orders',
            'budgets', 'documents']

        //Do NOT save "value"
        fieldsToDelete.forEach(field => value.set(field, undefined))

        return value
    }, error => {
        throw error
    })
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAnyUserRoles: ['editEventDetails', 'manageEventStatus']
});


Parse.Cloud.define("updateEventStatus", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const parseEvent = await new Parse.Query(Parse.Object.extend('Event')).get(params.eventId, {useMasterKey: true})
    parseEvent.set("isPrivate", params.isPrivate);
    parseEvent.set("isDraft", params.isDraft);
    parseEvent.set("isPublishScheduled", params.isPublishScheduled);
    parseEvent.set("publishDate", params.publishDate);


    return await parseEvent.save(null, {useMasterKey: true});
}, {
    fields: ['eventId', 'isPrivate', 'isDraft', 'isPublishScheduled', 'publishDate'],
    requireUser: true,
    requireAllUserRoles: ['manageEventStatus']
});

Parse.Cloud.define("deleteEvent", async (request) => {
    const eventId = request.params.eventId;

}, {
    fields: ['eventId'],
    requireUser: true,
});

async function updateEventStatus(params) {
    const parseEvent = await new Parse.Query(Parse.Object.extend('Event'))
        .get(params.eventId, {useMasterKey: true})
    const parseEventStatus = await new Parse.Query(Parse.Object.extend('EventStatus'))
        .find({useMasterKey: true})
    let newStatus;
    parseEventStatus.forEach(eventStatus => {
        if (eventStatus.get("statusName") === params.status) {
            newStatus = eventStatus;
        }
    })

    parseEvent.set("status", newStatus)

    if (!newStatus) {
        throw new Parse.Error(400, 'Event Status "' + params.status + '" is unknown')
    }

    return parseEvent.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error
    })
}

exports.basicEventDetails = async (eventId, userId) => {
    await authenticateOrganizationThroughEvent(eventId, userId)
    return await new Parse.Query(Parse.Object.extend("Event"))
        .descending('createdAt')
        .select("id", "createdAt", "name", "coverImage", 'startDate', 'endDate', 'description', 'isOnline', 'status')
        .include('status')
        .get(eventId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
}

