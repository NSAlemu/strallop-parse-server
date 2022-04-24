
const {createAddress, updateAddress} = require("./Address");
exports.createPersonalInformation = async (info) => {

    const newPersonalInformation = new (Parse.Object.extend("PersonalInformation"))();
    newPersonalInformation.setACL(new Parse.ACL())
    newPersonalInformation.set("firstName", info.firstName.toString());
    newPersonalInformation.set("middleName", info.middleName.toString());
    newPersonalInformation.set("lastName", info.lastName.toString());
    newPersonalInformation.set("organization", info.organization.toString());
    newPersonalInformation.set("phoneNumber", info.phoneNumber.toString());
    newPersonalInformation.set("email", info.email.toString());
    newPersonalInformation.set("address", await createAddress(info.address))

    return newPersonalInformation.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })
}
exports.updatePersonalInformation = async (id, info) => {

    const personalInformation = await new Parse.Query(Parse.Object.extend('PersonalInformation'))
        .get(id, {useMasterKey: true});

    const fieldsToUpdate = ['firstName', 'middleName', 'lastName',
        'organization', 'phoneNumber', 'email']

    fieldsToUpdate.forEach(field => info[field] === undefined ? "" : personalInformation.set(field, info[field]))
    await updateAddress(info.address.id, info.address)

    return personalInformation.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })
}
