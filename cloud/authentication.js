const {authenticateOrganizationThroughOrganization} = require("./authentication");
exports.authenticateOrganizationThroughEvent = async (eventId, userId) => {
    await new Parse.Query(Parse.Object.extend('Event'))
        .include("createdBy").include('createdBy.organization').get(eventId, {useMasterKey: true})
        .then(async value => {
            await this.authenticateOrganizationThroughOrganization(value.get('createdBy').get('organization').id, userId)
            return value
        }, error => {
            throw error;
        });
}

exports.authenticateOrganizationThroughUser = async (requestedUserId,  userId) => {
    await new Parse.Query(Parse.User)
        .include('organization').get(requestedUserId, {useMasterKey: true})
        .then(async value => {
            await this.authenticateOrganizationThroughOrganization(value.get('organization').id, userId)
            return value
        }, error => {
            throw error;
        });
}

exports.authenticateOrganizationThroughRole = async (roleId,  userId) => {
    await new Parse.Query(Parse.Role)
        .include('organization').get(roleId, {useMasterKey: true})
        .then(async value => {
            await this.authenticateOrganizationThroughOrganization(value.get('organization').id, userId)
            return value
        }, error => {
            throw error;
        });
}

exports.authenticateOrganizationThroughOrganization = async (orgId, userId) => {
    await new Parse.Query(Parse.Object.extend('Organization'))
        .get(orgId, {useMasterKey: true}).then(value => {
            value.relation('users').query().get(userId,{useMasterKey:true}).then(value1 => {
            }, (error) => {
                console.log('\n\n\n',error,'\n\n\n')
                throw new Parse.Error(
                    Parse.Error.OPERATION_FORBIDDEN,
                    'User not authorized to do the operation in this Organization'
                );
            })
        }, (error) => {
            console.log('\n\n\n', error, '\n\n\n\n');
            throw new Parse.Error(
                Parse.Error.OPERATION_FORBIDDEN,
                'User not authorized to do the operation'
            );
        })
}

exports.authenticateOrganizationThroughOrder = async (orderId, userId) => {
    await new Parse.Query(Parse.Object.extend('Order'))
        .include('event')
        .get(orderId, {useMasterKey: true})
        .then(async value => {
            await this.authenticateOrganizationThroughEvent(value.get('event').id, userId);
            return value
        }, error => {
            throw error;
        })
}
exports.authenticateOrganizationThroughTicketOrder = async (ticketOrderId, userId) => {
    await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .include('event')
        .get(ticketOrderId, {useMasterKey: true})
        .then(async value => {
            await this.authenticateOrganizationThroughEvent(value.get('event').id, userId);
            return value
        }, error => {
            throw error;
        })
}
