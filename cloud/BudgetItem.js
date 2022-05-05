const {authenticateOrganizationThroughEvent} = require("./authentication");

Parse.Cloud.define("getAllBudgetItems", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id)
    return await new Parse.Query(Parse.Object.extend("BudgetItem"))
        .equalTo("event", Parse.Object.extend('Event').createWithoutData(request.params.eventId))
        .ascending('name')
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("getAllBudgetItemsForCategory", async (request) => {
    const params = request.params;

    let innerEventQuery = new Parse.Query(Parse.Object.extend("Event"));
    innerEventQuery.equalTo("organization", request.user.get('organization'));

    const items =  await new Parse.Query(Parse.Object.extend("BudgetItem"))
        .equalTo("budgetCategory", Parse.Object.extend('BudgetCategory').createWithoutData(params.categoryId))
        .matchesQuery('event', innerEventQuery)
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });

    return items
}, {
    fields: ['categoryId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("createBudgetItem", async (request) => {
    const params = request.params;
    if(!params.budgetItem.name || params.budgetItem.name.length<1){
        throw new Parse.ParseError(Parse.Error.VALIDATION_ERROR, 'Each category must have a name.')
    }
    const newItem = new (Parse.Object.extend("BudgetItem"))();
    newItem.setACL(new Parse.ACL())
    newItem.set('name', params.budgetItem.name);
    newItem.set('event', Parse.Object.extend('Event').createWithoutData(params.eventId))
    newItem.set('budgetCategory', Parse.Object.extend('BudgetCategory').createWithoutData(params.categoryId))
    newItem.set('estCost', params.budgetItem.estCost);
    newItem.set('finalCost', params.budgetItem.finalCost);
    newItem.set('notes', params.budgetItem.notes);

    await newItem.save(null, {useMasterKey: true}).then(async value => {

        await new Parse.Query(Parse.Object.extend("BudgetCategory"))
            .get(params.categoryId, {useMasterKey: true}).then(async value1 => {
                value1.relation('budgetItems').add(value    )
                await value1.save(null, {useMasterKey: true})
            }, (error) => {
                throw error;
            })

        return value
    }, (error) => {
        throw error;
    })
    return newItem
}, {
    fields: ['eventId', 'categoryId', 'budgetItem'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("updateBudgetItem", async (request) => {
    const params = request.params;
    if(!params.budgetItem.name || params.budgetItem.name.length<1){
        throw new Parse.ParseError(Parse.Error.VALIDATION_ERROR, 'Each category must have a name.')
    }
    const item = await new Parse.Query(Parse.Object.extend("BudgetItem"))
        .include('event')
        .get(params.itemId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(item.get('event').id, request.user.id)

    item.set('name', params.budgetItem.name);
    item.set('estCost', params.budgetItem.estCost);
    item.set('finalCost', params.budgetItem.finalCost);
    item.set('notes', params.budgetItem.notes);
     await item.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
    return item
}, {
    fields: ['itemId', 'budgetItem'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});
Parse.Cloud.define("deleteBudgetItem", async (request) => {
    const params = request.params;
    const item = await new Parse.Query(Parse.Object.extend("BudgetItem"))
        .get(params.itemId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(item.get('event').id, request.user.id)

    return await item.destroy({useMasterKey: true});
}, {
    fields: ['itemId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});