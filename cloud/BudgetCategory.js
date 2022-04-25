const {authenticateOrganizationThroughEvent} = require("./authentication");

Parse.Cloud.define("getAllBudgetCategories", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id)
    const budgetCategories = await new Parse.Query(Parse.Object.extend("BudgetCategory"))
        .equalTo("event", Parse.Object.extend('Event').createWithoutData(params.eventId))
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
    const budgetItems = await new Parse.Query(Parse.Object.extend("BudgetItem"))
        .equalTo("event", Parse.Object.extend('Event').createWithoutData(params.eventId))
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });

    let event = Parse.Object.extend('Event')
    event.id = params.eventId
    const pipeline = [
        {match: {event: params.eventId}},
        {$group: {_id: null, total: {$sum: '$amount'}}},
    ];
    const totalPaid = await new Parse.Query("BudgetPaidItem")
        .aggregate(pipeline, {useMasterKey: true}).then(value => {
            if (!value || !value[0] || !value[0].total) {
                total = 0
                return
            }
            value[0].total
        }, error => {
            throw error
        })

    return {budgetCategories, budgetItems, totalPaid}
}, {
    fields: ['eventId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("getBudgetCategory", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id)
    const category = await new Parse.Query(Parse.Object.extend("BudgetCategory"))
        .include('event')
        .get(request.params.categoryId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });
    await authenticateOrganizationThroughEvent(category.get('event').id, request.user.id)
    return category

}, {
    fields: ['categoryId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("createBudgetCategory", async (request) => {
    const params = request.params;
    if (!params.name || params.length < 1) {
        throw new Parse.ParseError(Parse.Error.VALIDATION_ERROR, 'Each category must have a name.')
    }
    const newCategory = new (Parse.Object.extend("BudgetCategory"))();
    newCategory.setACL(new Parse.ACL())
    newCategory.set('name', params.name);
    newCategory.set('event', Parse.Object.extend('Event').createWithoutData(request.params.eventId))

    await newCategory.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
    return newCategory
}, {
    fields: ['eventId', 'name'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("updateBudgetCategory", async (request) => {
    const params = request.params;
    if (!params.name || params.name.length < 1) {
        throw new Parse.ParseError(Parse.Error.VALIDATION_ERROR, 'Each category must have a name.')
    }
    const category = await new Parse.Query(Parse.Object.extend("BudgetCategory"))
        .include('event')
        .get(params.categoryId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(category.get('event').id, request.user.id)

    category.set('name', params.name);

    await category.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
    return category;
}, {
    fields: ['categoryId', 'categoryName'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});
Parse.Cloud.define("deleteBudgetCategory", async (request) => {
    const params = request.params;
    const category = await new Parse.Query(Parse.Object.extend("BudgetCategory"))
        .include('event')
        .get(params.categoryId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(category.get('event').id, request.user.id)

    const items = await category.relation('budgetItems').query().find({useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error
    })
    await Parse.Object.destroyAll(items, {useMasterKey: true});
    await category.destroy({useMasterKey: true});
    return true
}, {
    fields: ['categoryId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

exports.createDefaultBudgetCategories = async (eventId) => {
    const defaultCategoryNames = ['Catering', 'Venue', 'Photography', 'Rental', 'Music', 'Tech Support', 'Ushers']
    const defaultCategories = []
    for (let i = 0; i < defaultCategoryNames.length; i++) {
        const newCategory = new (Parse.Object.extend("BudgetCategory"))();
        newCategory.setACL(new Parse.ACL())
        newCategory.set('name', defaultCategoryNames[i]);
        newCategory.set('event', Parse.Object.extend('Event').createWithoutData(eventId))

        defaultCategories.push(newCategory);
    }
    return await Parse.Object.saveAll(defaultCategories, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error
    })
}