const {authenticateOrganizationThroughOrganization} = require("./authentication");
Parse.Cloud.define("getOrganization", async (request) => {
    const params = request.params;
    await authenticateOrganizationThroughOrganization(params.orgId, request.user.id);

    return await new Parse.Query(Parse.Object.extend('Organization'))
        .get(params.orgId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error
        })
}, {
    fields: ['orgId'],
    requireUser: true,
});
exports.organizationAfterSave = async (request) => {
    const organization = request.object;
    const createdBy = request.user;
    if ((await organization.relation('organizationalRoles').query().count({useMasterKey: true})) < 1) {
        console.log('\n \n \n ')
        console.log('count: ', (await organization
            .relation('organizationalRoles').query().count({useMasterKey: true})))
        console.log('\n \n \n ')
        const orgAdminRole = createOrgRole('admin', organization)
        if (createdBy)
            orgAdminRole.relation('users').add(createdBy);
        await orgAdminRole.save(null, {useMasterKey: true})

        const mainAdminRole = await new Parse.Query(Parse.Role).equalTo('name', 'admin').first({useMasterKey: true})
        mainAdminRole.relation('roles').add(orgAdminRole);
        await mainAdminRole.save(null, {useMasterKey: true});

        organization.relation('organizationalRoles').add(orgAdminRole);

        await organization.save(null, {useMasterKey: true});
    }
}

function createOrgRole(name, organization) {
    const roleName = name + '_' + organization.get('name') + '_' + (Math.random() * Math.pow(10, 10)).toFixed(0);
    const orgRole = new Parse.Role(roleName, new Parse.ACL());
    orgRole.set('organization', organization);
    orgRole.set('isOrganizationalRole', true);
    orgRole.set('isAdmin', true);
    return orgRole;
}


Parse.Cloud.define("moveUserAccess", async (request) => {
    const user = await new Parse.Query(Parse.User).include('organization').get(request.params.userId, {useMasterKey: true});
    const org = user.get('organization')
    const orgRoles = await org.relation('organizationalRoles').query().find({useMasterKey: true});
    let newRole;
    for (const orgRole of orgRoles) {
        if (orgRole.id === request.params.newRoleId) {
            newRole = orgRole;
        }
    }
    if (!newRole) {
        return new Parse.Error(101, 'Access Does Not Exist');
    }

    const thisUserAccess = await org.relation('organizationalRoles').query()
        .equalTo('users', request.user)
        .first({useMasterKey: true});

    const changingUserRole = await org.relation('organizationalRoles').query()
        .equalTo('users', user).first({useMasterKey: true});
    if (thisUserAccess.get('organizationalLevel') > 1) {
        throw new Parse.Error(206, 'Insufficient Authorization');
    }
    if (thisUserAccess.get('organizationalLevel') === 1 && changingUserRole.get('organizationalLevel') === 0) {
        throw new Parse.Error(206, 'Insufficient Authorization');
    }
    if (thisUserAccess.get('organizationalLevel') === 1 && newRole.get('organizationalLevel') === 0) {
        throw new Parse.Error(206, 'Insufficient Authorization');
    }

    const newACL = new Parse.ACL();
    newACL.setPublicReadAccess(true);
    newACL.setReadAccess(user, true);
    newACL.setWriteAccess(user, true);
    for (const orgRole of orgRoles) {
        switch (orgRole.get('organizationalLevel')) {
            case 0:
                newACL.setRoleWriteAccess(orgRole, true);
                newACL.setRoleReadAccess(orgRole, true);
                break;
            case 1:
                if (newRole.get('organizationalLevel') > 0) {
                    newACL.setRoleWriteAccess(orgRole, true);
                    newACL.setRoleReadAccess(orgRole, true);
                }
                break;
            default:
                break;
        }

    }
    user.setACL(newACL);
    user.save(null, {useMasterKey: true});

    await org.relation('organizationalRoles').query()
        .equalTo('users', user)
        .first({useMasterKey: true})
        .then(async value => {
            if (value && (value.id !== request.params.newRoleId)) {
                value.getUsers().remove(Parse.User.createWithoutData(request.params.userId));
                await value.save(null, {useMasterKey: true});
            }
        }, reason => {
            console.log('first\n' + reason.message + '\n')
        }).catch(reason => {
            console.log('first\n' + reason.message + '\n')
        });

    new Parse.Query(Parse.Role)
        .get(request.params.newRoleId, {useMasterKey: true})
        .then(async value => {
            value.getUsers().add(Parse.User.createWithoutData(request.params.userId));
            return await value.save(null, {useMasterKey: true});
        }, reason => {
            console.log('second\n' + reason.message + '\n')
        }).catch(reason => {
        console.log('second\n' + reason.message + '\n')
    });
    return user;
}, {
    requireUser: true
});
Parse.Cloud.define("getUserAccess", async (request) => {
    let user = await new Parse.Query(Parse.User).include('organization').get(request.params.userId, {useMasterKey: true})

    return await user.get('organization').relation('organizationalRoles')
        .query().equalTo('users', Parse.User.createWithoutData(request.params.userId)).first({useMasterKey: true})
}, {
    fields: ['userId'],
});
