const {authenticateOrganizationThroughRole} = require("./authentication");

Parse.Cloud.define("getAllRoles", async (request) => {
    const params = request.params
    const user = await new Parse.Query(Parse.User)
        .get(request.user.id, {useMasterKey: true})

    return {
        roles: await new Parse.Query(Parse.Role)
            .equalTo("organization", user.get("organization"))
            .equalTo('isOrganizationalRole', true)
            .descending('createdAt')
            .find({useMasterKey: true}).then(value => {
                return value
            }, (error) => {
                throw error
            }),
        users: await new Parse.Query(Parse.User)
            .equalTo("organization", user.get("organization"))
            .include('role')
            .descending('name')
            .find({useMasterKey: true}).then(value => {
                return value
            }, (error) => {
                throw error
            })
    }
}, {
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});

Parse.Cloud.define("createOrgRole", async (request) => {
    const role = request.params.role;
    const user = request.user;

    // const user = await new Parse.Query(Parse.User)
    //     .get(request.user.id, {useMasterKey: true})

    const newRole = new (Parse.Role)();
    newRole.setACL(new Parse.ACL())
    newRole.set("displayName", role.displayName);
    newRole.set("isOrganizationalRole", true);
    newRole.set("isAdmin", false);
    newRole.set("name", role.displayName + '_' + (Math.floor(Math.random() * 1000000)));
    newRole.set("displayName", role.displayName);
    newRole.set("organization", request.user.get('organization'));
    newRole.set("permissionList", validatedRolePermission(role.permissions))

    await newRole.save(null, {useMasterKey: true}).then(role => {
        return role
    }, (error) => {
        throw error
    });

    return newRole
}, {
    fields: ['role'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
})

Parse.Cloud.define("editOrgRole", async (request) => {
    const role = request.params.role;

    const parseRole = await new Parse.Query(Parse.Role)
        .get(role.id, {useMasterKey: true})
    await authenticateOrganizationThroughRole(role.id, request.user.id)


    parseRole.set("displayName", role.displayName);
    parseRole.set("isOrganizationalRole", true);
    parseRole.set("isAdmin", false);
    parseRole.set("name", role.displayName + '_' + (Math.floor(Math.random() * 1000000)));
    parseRole.set("displayName", role.displayName);
    parseRole.set("organization", request.user.get('organization'));
    parseRole.set("permissionList", validatedRolePermission(role.permissions))
    console.log('\n\n\nd')
    mainRoleNames.forEach(async roleName => {
        await new Parse.Query(Parse.Role).equalTo('name', roleName)
            .first({useMasterKey: true}).then(async value => {
                if (value) {
                    if (parseRole.get('permissionList')[roleName]) {
                        console.log('adding role: ', roleName)
                        value.getRoles().add(parseRole)
                    } else {
                        console.log('removing role: ', roleName)
                        value.getRoles().remove(parseRole)
                    }
                    await value.save(null, {useMasterKey: true});
                }
            }, (error) => {
                console.log(error)
            })
    })
    console.log('\n\n\nd')
    return await parseRole.save(null, {useMasterKey: true}).then(role => {
        return role
    }, (error) => {
        throw error
    });
}, {
    fields: ['role'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
})
Parse.Cloud.define("currentUserRole", async (request) => {
    return await new Parse.Query(Parse.User).include('role')
        .get(request.user.id, {useMasterKey: true}).then(value => {
            return value.get('role')
        }, (error) => {
            throw error
        })
}, {
    requireUser: true,
});

Parse.Cloud.define("deleteOrgRole", async (request) => {
    const role = await new Parse.Query(Parse.Role)
        .equalTo('isOrganizationalRole', true)
        .get(request.params.roleId, {useMasterKey: true}).then(value => {
            return value.get('role')
        }, (error) => {
            throw error
        })
    if((await role.relation('users').query().count({useMasterKey})) >0 ){
        throw new Parse.Error(Parse.Error.VALIDATION_ERROR, 'Role contains users. Cannot delete Role while it contains users')
    }
    return await role.destroy({useMasterKey:true})
}, {
    fields:['roleId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});


validatedRolePermission = (permissions) => {
    return {
        basicEventReport: permissions.basicEventReport ? permissions.basicEventReport : false,
        manageEventDocuments: permissions.manageEventDocuments ? permissions.manageEventDocuments : false,
        manageBudget: permissions.manageBudget ? permissions.manageBudget : false,
        manageReminderEmails: permissions.manageReminderEmails ? permissions.manageReminderEmails : false,
        manageOrderConfirmationEmails: permissions.manageOrderConfirmationEmails ? permissions.manageOrderConfirmationEmails : false,
        editOrganizationInformation: permissions.editOrganizationInformation ? permissions.editOrganizationInformation : false,
        manageOrganizationMembersAndPermissions: permissions.manageOrganizationMembersAndPermissions ? permissions.manageOrganizationMembersAndPermissions : false,
        viewFinancialEventReports: permissions.viewFinancialEventReports ? permissions.viewFinancialEventReports : false,
        viewOrganizationFinancialBalances: permissions.viewOrganizationFinancialBalances ? permissions.viewOrganizationFinancialBalances : false,
        resendConfirmationEmails: permissions.resendConfirmationEmails ? permissions.resendConfirmationEmails : false,
        createAttendeeBadges: permissions.createAttendeeBadges ? permissions.createAttendeeBadges : false,
        addAttendees: permissions.addAttendees ? permissions.addAttendees : false,
        manageOrders: permissions.manageOrders ? permissions.manageOrders : false,
        viewAttendees: permissions.viewAttendees ? permissions.viewAttendees : false,
        checkinAttendees: permissions.checkinAttendees ? permissions.checkinAttendees : false,
        manageTickets: permissions.manageTickets ? permissions.manageTickets : false,
        createEvents: permissions.createEvents ? permissions.createEvents : false,
        manageEventStatus: permissions.manageEventStatus ? permissions.manageEventStatus : false,
        editEventDetails: permissions.editEventDetails ? permissions.editEventDetails : false,
        issueRefunds: permissions.issueRefunds ? permissions.issueRefunds : false,
    }
}

mainRoleNames = ['admin',
    'manageReminderEmails',
    'manageOrderConfirmationEmails',
    'editOrganizationInformation',
    'manageOrganizationMembersAndPermissions',
    'viewFinancialEventReports',
    'viewOrganizationFinancialBalances',
    'resendConfirmationEmails',
    'createAttendeeBadges',
    'addAttendees',
    'manageOrders',
    'viewAttendees',
    'checkinAttendees',
    'manageTickets',
    'createEvents',
    'manageEventStatus',
    'editEventDetails',
    'issueRefunds',
    'manageEventDocuments',
    'manageBudget',
    'basicEventReport'
]

// manageOrder
// {
//     issueRefunds
//     addAttendees
//     createAttendeeBadges
//     checkinAttendees
//     resendConfirmationEmails,
//         viewAttendees
// }
// createEvent
// {
//     manageTickets
//     manageEventStatus
//     editEventDetails
// // }