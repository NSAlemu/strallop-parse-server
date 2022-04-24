const {authenticateOrganizationThroughEvent} = require("./authentication");
const {createAddress} = require("./Address");
Parse.Cloud.define("getAllBudgetPaidItems", async (request) => {
    const params = request.params;

    let innerEventQuery = new Parse.Query(Parse.Object.extend("Event"));
    innerEventQuery.equalTo("organization", request.user.get('organization'));

    return await new Parse.Query(Parse.Object.extend("BudgetPaidItem"))
        .equalTo("budgetItem", Parse.Object.extend('BudgetItem').createWithoutData(params.itemId))
        .matchesQuery('event', innerEventQuery)
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            return error
        });

}, {
    fields: ['itemId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});

Parse.Cloud.define("createBudgetPaidItem", async (request) => {
    const params = request.params
    await authenticateOrganizationThroughEvent(params.eventId, request.user.id);

    const user = await new Parse.Query(Parse.User)
        .get(request.user.id, {useMasterKey: true})

    const paidItem = new (Parse.Object.extend("BudgetPaidItem"))();
    paidItem.setACL(new Parse.ACL())
    paidItem.set("amount", params.paidItemData.amount);
    paidItem.set("dueDate", params.paidItemData.dueDate);
    paidItem.set("isPaid", params.paidItemData.isPaid);
    paidItem.set("payerName", params.paidItemData.payerName);
    paidItem.set("paymentDate", params.paidItemData.paymentDate);
    paidItem.set("paymentMethod", params.paidItemData.paymentMethod);
    paidItem.set("event", Parse.Object.extend('Event').createWithoutData(params.eventId));
    paidItem.set("budgetItem", Parse.Object.extend('BudgetItem').createWithoutData(params.budgetItemId));
    paidItem.set("budgetCategory", Parse.Object.extend('BudgetCategory').createWithoutData(params.budgetCategoryId));

    return paidItem.save(null, {useMasterKey: true}).then(async event => {
        return event;
    }, (error) => {
        throw error
    });
}, {
    fields: ['eventId', 'budgetItemId', 'budgetCategoryId', 'paidItemData'],
    requireUser: true,
    requireAllUserRoles: ['createEvents']
});

Parse.Cloud.define("updateBudgetPaidItem", async (request) => {
    const params = request.params;

    const paidItem = await new Parse.Query(Parse.Object.extend("BudgetPaidItem"))
        .include('event')
        .get(params.paidItemId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(paidItem.get('event').id, request.user.id)

    paidItem.set("amount", params.paidItemData.amount);
    paidItem.set("dueDate", params.paidItemData.dueDate);
    paidItem.set("isPaid", params.paidItemData.isPaid);
    paidItem.set("payerName", params.paidItemData.payerName);
    paidItem.set("paymentDate", params.paidItemData.paymentDate);
    paidItem.set("paymentMethod", params.paidItemData.paymentMethod);
    await paidItem.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
    return paidItem
}, {
    fields: ['paidItemId', 'paidItemData'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});
Parse.Cloud.define("deleteBudgetPaidItem", async (request) => {
    const params = request.params;
    const paidItem = await new Parse.Query(Parse.Object.extend("BudgetPaidItem"))
        .get(params.paidItemId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughEvent(paidItem.get('event').id, request.user.id)

    await paidItem.destroy({useMasterKey: true}).then(value => {

    }, error => {throw error});
    return true;
}, {
    fields: ['paidItemId'],
    requireUser: true,
    requireAllUserRoles: ['manageBudget']
});