const {
    ConfirmationEmailOrderTemplate,
    ConfirmationEmailTemplate,
    ReminderEmailOrderTemplate
} = require("./EmailTemplates");

Parse.Cloud.define("sendConfirmationEmail", async (request) => {
    await this.sendConfirmationEmail(request.params.orderId);
}, {
    fields: ['orderId']
});

Parse.Cloud.define("sendReminderEmail", async (request) => {
    await this.sendReminderEmail(request.params.eventId);
}, {
    fields: ['eventId']
});
Parse.Cloud.define("sendTestReminderEmail", async (request) => {
    let reminderEmail = ReminderEmailOrderTemplate + '';
    const ticketOrder = await new Parse.Query(Parse.Object.extend('TicketOrder'))
        .include('attendeeInfo').include('ticketType').include('ticketType.event').include('ticketType.event.reminderEmail').include('ticketType.event.address')
        .get(request.params.ticketOrderId, {useMasterKey: true});
    const event = ticketOrder.get('ticketType').get('event');
    reminderEmail = reminderEmail.replace(/{{{firstName}}}/g, ticketOrder.get("attendeeInfo").get("firstName"));
    reminderEmail = reminderEmail.replace(/{{{eventName}}}/g, event.get('name'));
    reminderEmail = reminderEmail.replace(/{{{eventLocation}}}/g, formatAddress(event.get('address')));
    reminderEmail = reminderEmail.replace(/{{{startDate}}}/g, formatDate(new Date(event.get('startDate'))));
    reminderEmail = reminderEmail.replace(/{{{startTime}}}/g, formatTime(new Date(event.get('startDate'))));
    reminderEmail = reminderEmail.replace(/{{{ticketTypeName}}}/g, ticketOrder.get('ticketType').get('name'));
    reminderEmail = reminderEmail.replace(/{{{emailHTMLDescription}}}/g, event.get('reminderEmail').get('html'));
    reminderEmail = reminderEmail.replace(/{{{eventId}}}/g, event.id);
    reminderEmail = reminderEmail.replace(/{{{ticketNumber}}}/g, ticketOrder.id)
    reminderEmail = reminderEmail.replace(/{{{purchaserEmail}}}/g, ticketOrder.get("attendeeInfo").get("email"));
    Parse.Cloud.run("sendEmail", {
        to: ticketOrder.get('attendeeInfo').get('email'),
        subject: event.get('name') + ' reminder', body: reminderEmail
    });
}, {
    fields: ['ticketOrderId']
});
Parse.Cloud.define('sendEmail', async (request) => {
    const to = request.params.to;
    const subject = request.params.subject;
    const body = request.params.body;

    Parse.Cloud.httpRequest({
        method: 'POST',
        url: 'https://strallop-support.herokuapp.com/sendEmail',
        body: {
            to: to,
            body: body,
            subject: subject
        }
    }).then(function (httpResponse) {
    }, function (httpResponse) {
        console.error('Request failed with response code ' + httpResponse.status);
    });
}, {
    fields: ['to', 'body', 'subject']
});
exports.sendConfirmationEmail = async (orderId) => {
    let confirmationEmail = ConfirmationEmailTemplate + '';
    const confirmationEmailOrder = ConfirmationEmailOrderTemplate + '';
    let modifiedOrderTemplate = "";
    console.log("\n\n\n\n\n\n OrderId: " + orderId + "\n\n\n\n\n")
    let order = await new Parse.Query(Parse.Object.extend('Order'))
        .include('event').include('event.confirmationEmail').include('buyerInfo').get(orderId, {useMasterKey: true});
    let event = order.get('event')
    let ticketsOrdered = await order.relation('orderedTickets').query()
        .include('ticketType').find({useMasterKey: true});
    confirmationEmail = confirmationEmail.replace(/{{{firstName}}}/g, order.get("buyerInfo").get("firstName"));
    confirmationEmail = confirmationEmail.replace(/{{{eventName}}}/g, event.get('name'));
    confirmationEmail = confirmationEmail.replace(/{{{emailHTMLDescription}}}/g, event.get('confirmationEmail').get('html'));
    confirmationEmail = confirmationEmail.replace(/{{{eventId}}}/g, event.id);
    confirmationEmail = confirmationEmail.replace(/{{{orderNumber}}}/g, order.id)
    confirmationEmail = confirmationEmail.replace(/{{{purchaseDate}}}/g, formatDate(new Date(order.createdAt)))
    confirmationEmail = confirmationEmail.replace(/{{{purchaserEmail}}}/g, order.get("buyerInfo").get("email"))
    const ticketMap = new Map();
    for (let ticketOrdered of ticketsOrdered) {
        if (ticketMap.get(ticketOrdered.id)) {
            const newCount = {
                name: ticketOrdered.get('ticketType').get('name'),
                count: ticketOrdered.get('ticketType').get('name') + 1,
                price: ticketOrdered.get('ticketType').get('price')
            }
            ticketMap.set(ticketOrdered.id, newCount)
        } else {
            ticketMap.set(ticketOrdered.id, {
                name: ticketOrdered.get('ticketType').get('name'),
                count: 1,
                price: ticketOrdered.get('ticketType').get('price')
            })
        }
    }
    for (let [key, value] of ticketMap) {
        let orderModification = confirmationEmailOrder + "";
        orderModification = orderModification.replace(/{{{purchasedTicketAmount}}}/g, value.count)
        orderModification = orderModification.replace(/{{{purchasedTicketTypeName}}}/g, value.name)
        orderModification = orderModification.replace(/{{{purchasedTicketCost}}}/g, (value.price * value.count) + '')
        modifiedOrderTemplate += orderModification;
    }
    confirmationEmail = confirmationEmail.replace(/{{{purchasedOrder}}}/g, modifiedOrderTemplate)
    return {
        to: order.get('buyerInfo').get('email'),
        body: confirmationEmail,
        subject: event.get('name') + " Confirmation!"
    };
}

exports.sendReminderEmail = async (eventId) => {
    let reminderEmail = ReminderEmailOrderTemplate + '';
    let event = await new Parse.Query(Parse.Object.extend('Event'))
        .include('reminderEmail').include('address').get(eventId, {useMasterKey: true});

    const TicketType = Parse.Object.extend("TicketType");
    const TicketOrder = Parse.Object.extend("TicketOrder");
    const innerQuery = new Parse.Query(TicketType);
    innerQuery.equalTo("event", eventId);
    const query = new Parse.Query(TicketOrder);
    query.matchesQuery("ticketType", innerQuery);
    const ticketOrders = await query.include('attendeeInfo').include('ticketType').find({useMasterKey:true});
    for (let ticketOrder of ticketOrders) {
        let reminderEmail = confirmationEmail.replace(/{{{firstName}}}/g, ticketOrder.get("attendeeInfo").get("firstName"));
        reminderEmail = reminderEmail.replace(/{{{eventName}}}/g, event.get('name'));
        reminderEmail = reminderEmail.replace(/{{{eventLocation}}}/g, formatAddress(event.get('address')));
        reminderEmail = reminderEmail.replace(/{{{startDate}}}/g, formatDate(new Date(event.get('startDate'))));
        reminderEmail = reminderEmail.replace(/{{{startTime}}}/g, formatTime(new Date(event.get('startDate'))));
        reminderEmail = reminderEmail.replace(/{{{ticketTypeName}}}/g, ticketOrder.get('ticketType').get('name'));
        reminderEmail = reminderEmail.replace(/{{{emailHTMLDescription}}}/g, event.get('reminderEmail').get('html'));
        reminderEmail = reminderEmail.replace(/{{{eventId}}}/g, event.id);
        reminderEmail = reminderEmail.replace(/{{{ticketNumber}}}/g, ticketOrder.id)
        reminderEmail = reminderEmail.replace(/{{{purchaserEmail}}}/g, ticketOrder.get("attendeeInfo").get("email"));
        Parse.Cloud.run("sendEmail", {
            to: ticketOrder.get('attendeeInfo').get('email'),
            subject: event.get('name') + ' reminder', body: reminderEmail
        });
    }
};

exports.createEmail = async (eventId) => {
    const email = new (Parse.Object.extend("Email"))();
    email.setACL(new Parse.ACL())
    email.set("isScheduled", false);
    email.set("html", "");
    email.set("event", Parse.Object.extend("Event").createWithoutData(eventId));
    return await email.save(null, {useMasterKey: true}).then(value => {
        return value
    }, error => {
        throw error;
    })
}

function formatDate(date) {
    let d = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function formatTime(date) {
    let d = new Date(date);
    let hours = d.getHours();
    let min = d.getMinutes();
    let ampm = ' AM'
    if (hours > 12) {
        ampm = ' PM'
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    return (hours < 10 ? '0' : '') + hours + ':' + (d.getMinutes() < 10 ? '0' : '') + min + ampm;
}

function formatAddress(address) {
    let formattedAddress = '';
    formattedAddress += address.get('name').length > 0 ? address.get('name').length : ''
    formattedAddress += formattedAddress.length > 0 && address.get('address1').length > 0 ? ', ' : ''

    formattedAddress += address.get('address1').length > 0 ? address.get('address1').length : ''
    formattedAddress += formattedAddress.length > 0 && address.get('address2').length > 0 ? ', ' : ''

    formattedAddress += address.get('address2').length > 0 ? address.get('address2').length : ''
    formattedAddress += formattedAddress.length > 0 && address.get('city').length > 0 ? ', ' : ''

    formattedAddress += address.get('city').length > 0 ? address.get('city').length : ''
    formattedAddress += formattedAddress.length > 0 && address.get('country').length > 0 ? ', ' : ''

    formattedAddress += address.get('country').length > 0 ? address.get('country').length : ''

    return formattedAddress;
}
