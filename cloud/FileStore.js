const {authenticateOrganizationThroughEvent} = require("./authentication");
Parse.Cloud.define("getAllEventDocuments", async (request) => {
    const params = request.params;

    const fileStore = await new Parse.Query(Parse.Object.extend('FileStore'))
        .include('event')
        .equalTo('event', Parse.Object.extend("Event").createWithoutData(params.eventId))
        .find({useMasterKey: true}).then(value => {
            return value
        }, error => {
            throw error
        })
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);
    return fileStore
}, {
    fields: ['eventId'],
    requireUser: true,
});

Parse.Cloud.define("createEventDocument", async (request) => {
    const params = request.params;
    const fileData = request.params.fileData;
    const newFileStore = new (Parse.Object.extend("FileStore"))();
    newFileStore.setACL(new Parse.ACL())
    newFileStore.set('name', fileData.name)
    newFileStore.set('event', Parse.Object.extend('Event').createWithoutData(params.eventId))
    newFileStore.set('updatedBy', request.user)
    newFileStore.set('createdBy', request.user)
    newFileStore.set('file', await (new Parse.File(fileData.fileName, {base64: params.file})).save({useMasterKey: true}))

    await newFileStore.save(null, {useMasterKey: true}).then(value => {
    }, (error) => {
        throw error
    })
    return newFileStore;

}, {
    fields: ['eventId', 'fileData', 'file'],
    requireUser: true,
    requireAllUserRoles: ['manageEventDocuments']
});

Parse.Cloud.define("renameEventDocument", async (request) => {
    const params = request.params;

    const fileStore = await new Parse.Query(Parse.Object.extend('FileStore'))
        .include('event')
        .get(params.fileId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
    await authenticateOrganizationThroughEvent(fileStore.get('event').id, request.user.id);

    fileStore.set('name', params.fileName)
    fileStore.set('updatedBy', request.user)

    await fileStore.save(null, {useMasterKey: true}).then(value => {
    }, (error) => {
        throw error
    })
    return fileStore;

}, {
    fields: ['fileId', 'fileName'],
    requireUser: true,
    requireAllUserRoles: ['manageEventDocuments']
});

Parse.Cloud.define("deleteEventDocument", async (request) => {
    const params = request.params;

    const fileStore = await new Parse.Query(Parse.Object.extend('FileStore'))
        .include('event')
        .get(params.fileId, {useMasterKey: true}).then(value => {
            return value
        }, error => {
            throw error
        })
    await authenticateOrganizationThroughEvent(fileStore.get('event').id, request.user.id);

    if (fileStore.get('file')) {
        await fileStore.get('file').destroy({useMasterKey: true});
    }

    await fileStore.destroy({useMasterKey: true}).then(value => {
    }, (error) => {
        throw error
    })
    return fileStore;

}, {
    fields: ['fileId'],
    requireUser: true,
    requireAllUserRoles: ['manageEventDocuments']
});