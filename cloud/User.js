const {authenticateOrganizationThroughOrganization, authenticateOrganizationThroughUser} = require("./authentication");
Parse.Cloud.define("createUser", async (request) => {
    const params = request.params
    const user = new Parse.User();
    user.set('username', params.userData.username);
    user.set('password', params.password);
    user.set('email', params.userData.email);

    user.set('name', params.userData.name ? params.userData.name : '');
    user.set('phone', params.userData.phoneNumber ? params.userData.phoneNumber : '');
    user.set('disabled', params.userData.disabled);
    const role = await new Parse.Query(Parse.Role)
        .include('organization').get(params.selectedRoleId, {useMasterKey: true})
        .then(value => {
            if (!value.get('isOrganizationalRole') ||
                (value.get('organization') && (value.get('organization').id !== request.user.get('organization').id)))
                throw new Parse.Error(Parse.Error.VALIDATION_ERROR, "Could not update user. Failed to assign this Role")

            return value
        }, (error) => {
            throw error
        })
    user.set('role', role);
    user.set('organization', request.user.get('organization'))

    return await user.signUp(null, {useMasterKey: true}).then(async newUser => {
        newUser.get('organization').relation('users').add(newUser);
        newUser.save(null, {useMasterKey: true}).then(async value => {
        }, (error) => {
            throw error
        })
        return user
    }, (error) => {
        throw error
    })

}, {
    fields: ['userData', 'selectedRoleId', 'password'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});

Parse.Cloud.define("fetchCurrentUser", async (request) => {
    return new Parse.Query(Parse.User)
        .include('role')
        .get(request.user.id, {useMasterKey: true})
        .then(value => {
            return value
        }, error => {
            throw error;
        })
}, {
    requireUser: true,
});

Parse.Cloud.define("updateUser", async (request) => {
    const params = request.params;

    const parseUser = await new Parse.Query(Parse.User)
        .include('organization')
        .get(params.userData.id, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw  error
        })
    await authenticateOrganizationThroughUser(parseUser.userData.id, request.user.id)
    parseUser.set('username', params.userData.username)
    parseUser.set('name', params.userData.name)

    const role = await new Parse.Query(Parse.Role)
        .include('organization')
        .get(params.selectedRoleId, {useMasterKey: true})
        .then(value => {
            if (!value.get('isOrganizationalRole') ||
                (value.get('organization') && (value.get('organization').id !== request.user.get('organization').id)))
                throw new Parse.Error(Parse.Error.VALIDATION_ERROR, "Could not update user. Failed to assign this Role")
            return value
        }, (error) => {
            throw error
        })
    parseUser.set('role', role)

    return await parseUser.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
}, {
    fields: ['userData', 'selectedRoleId'],
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});

Parse.Cloud.define("updateSelf", async (request) => {
    const params = request.params;
    const thisUser = request.user;

    console.log('\n\n\n'+JSON.stringify(params)+'\n\n\n')
    thisUser.set('phone', params.phoneNumber)
    thisUser.set('email', params.email)

    if (thisUser.get('profileImg')) {
        await thisUser.get('profileImg').destroy({useMasterKey: true});
    }

    if (params.profileImg) {
        const file = new Parse.File("profileImg.png", {base64: params.profileImg});
        const parseFile = await file.save({useMasterKey: true})
        thisUser.set('profileImg', parseFile)
    } else {
        thisUser.unset('profileImg')
    }

   return  await thisUser.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error;
    })
}, {
    fields:['phoneNumber', 'email'],
    requireUser:true
});

Parse.Cloud.define("setDisableUser", async (request) => {
    const parseUser = await new Parse.Query(Parse.User)
        .get(request.params.userId, {useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    await authenticateOrganizationThroughUser(request.params.userId, request.user.id)

    parseUser.set('disabled', request.params.disabled);
    if (request.params.disabled) {
        await removeAllSessionsForUserId(request.params.userId)
    }
    return await parseUser.save(null, {useMasterKey: true}).then(value => {
        return value
    }, (error) => {
        throw error
    })

}, {
    fields: ['userId', 'disabled'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});


Parse.Cloud.define("deleteUser", async (request) => {
    throw new Parse.Error(Parse.Error.UNSUPPORTED_SERVICE, 'Deleting Users is currently not allowed. Use Disable in the meantime')
    await authenticateOrganizationThroughUser(request.params.userId, request.user.id)
    const userId = request.params.userId;
    await removeAllSessionsForUserId(userId)
    return await new Parse.Query(Parse.User)
        .get(userId, {useMasterKey: true}).then(async user => {
            return await user.destroy({useMasterKey: true}).then(value => {
                return value
            }, (error) => {
                throw error
            })
        }, (error) => {
            throw error
        })

}, {
    fields: ['userId'],
    requireUser: true,
    requireAllUserRoles: ['manageOrganizationMembersAndPermissions']
});

removeAllSessionsForUserId = async (userId) => {
    const sessions = await new Parse.Query(Parse.Session)
        .equalTo('user', Parse.User.createWithoutData(userId))
        .find({useMasterKey: true}).then(value => {
            return value
        }, (error) => {
            throw error;
        })
    return await Parse.Object.destroyAll(sessions, {useMasterKey: true}).then(value => {
        return value;
    }, (error) => {
        throw error
    })
}
