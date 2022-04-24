exports.createAddress = async (address) => {

    const newAddress = new (Parse.Object.extend("Address"))();
    newAddress.setACL(new Parse.ACL())
    newAddress.set("name", address.name.toString());
    newAddress.set("address1", address.address1.toString());
    newAddress.set("address2", address.address2.toString());
    newAddress.set("city", address.city.toString());
    newAddress.set("country", address.country.toString());

    return newAddress.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })

}

exports.updateAddress = async (id, newAddress) => {

    console.log('\n\n\n\n', newAddress,'\n\n\n\n')
    const parseAddress = await new Parse.Query(Parse.Object.extend('Address'))
        .get(id, {useMasterKey: true});

    const fieldsToUpdate = ['name', 'address1', 'address2', 'city', 'country']

    fieldsToUpdate.forEach(field => newAddress[field] === undefined ? "" : parseAddress.set(field, newAddress[field]))

    return parseAddress.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })

}

