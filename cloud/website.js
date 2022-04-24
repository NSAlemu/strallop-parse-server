Parse.Cloud.define("featuredEventsWeb", async (request) => {
  const events = await new Parse.Query(Parse.Object.extend('Event')).include('address').find({useMasterKey: true});
  const adjEvents = [];
  for (const event of events) {
    adjEvents.push(toWebEvent(event));
  }
  return adjEvents;
});
Parse.Cloud.define("purchaseTickets", async (request) => {
  const orderObject = new (Parse.Object.extend('Order'))();
  console.log('\n1')
  const ticketsBought = request.params.ticketsBought
  console.log('\n2')
  console.log('\n3')
  const ticketStatus = (await new Parse.Query(Parse.Object.extend('TicketStatus'))
    .equalTo('statusName', 'Registered').first({useMasterKey: true}));
  const orderStatus = (await new Parse.Query(Parse.Object.extend('OrderStatus'))
    .equalTo('statusname', 'Completed').first({useMasterKey: true}));
  console.log('\n4')
  orderObject.set('event', Parse.Object.extend('Event').createWithoutData(request.params.eventId));
  orderObject.set('buyerInfo', await setPersonalInfo(request.params.contactInfo, request.params.contactInfo.address));
  orderObject.set('status', orderStatus);
  await orderObject.save(null, {useMasterKey: true});
  for (let ticketBought of ticketsBought) {
    const orderedTicketObject = new (Parse.Object.extend('TicketOrder'))();
    orderedTicketObject.set('status', ticketStatus);
    orderedTicketObject.set('ticketType', Parse.Object.extend('TicketType').createWithoutData(ticketBought.ticketType.id));
    orderedTicketObject.set('attendeeInfo', await setPersonalInfo(ticketBought.attendeeInfo, ticketBought.attendeeInfo.address));
    const asd = await orderedTicketObject.save(null, {useMasterKey: true});
    orderObject.relation('orderedTickets').add(asd);
  }
  const event = await new Parse.Query(Parse.Object.extend('Event')).get(request.params.eventId, {useMasterKey: true});
  event.relation('orders').add(await orderObject.save(null, {useMasterKey: true}));
  event.save(null, {useMasterKey: true})
  return true;
}, {
  fields: ['eventId', 'contactInfo', 'ticketsBought']
});
Parse.Cloud.define("getEventWeb", async (request) => {
  const event = await new Parse.Query(Parse.Object.extend('Event')).include('address')
    .get(request.params.eventId, {useMasterKey: true});
  const webEvent = toWebEvent(event);
  const webTickets = [];
  const ticketMap = new Map();
  const tickets = await event.relation('ticketTypes').query().find({useMasterKey: true})
  const orders = await event.relation('orders').query().include('status').find({useMasterKey: true})
  for (const order of orders) {
    const ticketOrders = await order.relation('orderedTickets').query().include('ticketType').find({useMasterKey: true})
    for (const ticketOrder of ticketOrders) {
      let ticketM = ticketMap.has(ticketOrder.get('ticketType').id) ? ticketMap.get(ticketOrder.get('ticketType').id) : 0;
      ticketMap.set(ticketOrder.get('ticketType').id, ++ticketM);
    }
  }
  tickets.forEach(ticket => {
    const sold = ticketMap.has(ticket.id) ? ticketMap.get(ticket.id) : 0;
    webTickets.push(getWebEventTickets(ticket, sold))
  })
  webEvent.tickets = webTickets;
  return webEvent;
}, {
  fields: ['eventId']
});

Parse.Cloud.define("todayEventsWeb", async (request) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime());
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const events = await new Parse.Query(Parse.Object.extend('Event')).include('address')
    .greaterThanOrEqualTo('startDate', new Date()).lessThan('startDate', tomorrow)
    .find({useMasterKey: true});
  const adjEvents = [];
  for (const event of events) {
    adjEvents.push(toWebEvent(event));
  }
  return adjEvents;
});

Parse.Cloud.define("weekendEventsWeb", async (request) => {
  const events = await new Parse.Query(Parse.Object.extend('Event')).include('address')
    .greaterThanOrEqualTo('startDate', getWeekendStart()).lessThan('startDate', getWeekendEnd())
    .find({useMasterKey: true});
  const adjEvents = [];
  for (const event of events) {
    adjEvents.push(toWebEvent(event));
  }
  return adjEvents;
});

Parse.Cloud.define("freeEventsWeb", async (request) => {
  const Event = Parse.Object.extend("Event");
  const TicketType = Parse.Object.extend("TicketType");
  const innerQuery = new Parse.Query(TicketType);
  innerQuery.lessThanOrEqualTo('price', 0);
  const query = new Parse.Query(Event);
  query.matchesQuery("ticketTypes", innerQuery);
// events now contains ticket types where the price is 0.
  const events = await query.include('address').find({useMasterKey: true});
  const adjEvents = [];
  for (const event of events) {
    adjEvents.push(toWebEvent(event));
  }
  return adjEvents;
});

Parse.Cloud.define("purchaseTicketsWeb", async (request) => {
  const Event = Parse.Object.extend("Event");
  const TicketType = Parse.Object.extend("TicketType");
  const innerQuery = new Parse.Query(TicketType);
  innerQuery.lessThanOrEqualTo('price', 0);
  const query = new Parse.Query(Event);
  query.matchesQuery("ticketTypes", innerQuery);
// events now contains ticket types where the price is 0.
  const events = await query.include('address').find({useMasterKey: true});
  const adjEvents = [];
  for (const event of events) {
    adjEvents.push(toWebEvent(event));
  }
  return adjEvents;
}, {
  fields: ['eventId', 'tickets']
});


function toWebEvent(event) {
  return {
    id: event.id,
    name: event.get('name'),
    coverImage: event.get('coverImage') ? event.get('coverImage').url() : '',
    startDate: event.get('startDate'),
    endDate: event.get('endDate'),
    address: {
      id: event.get('address').id,
      name: event.get('address').get('event'),
      address1: event.get('address').get('address1'),
      address2: event.get('address').get('address2'),
      city: event.get('address').get('city'),
      country: event.get('address').get('country')
    },
    description: event.get('description'),
  }
}

function getWebEventTickets(event, sold) {
  return {
    id: event.id,
    updatedAt: event.updatedAt,
    createdAt: event.createdAt,
    name: event.get('name'),
    price: event.get('price'),
    capacity: event.get('capacity'),
    attendeeLimitPerOrder: event.get('attendeeLimitPerOrder'),
    requireAttendeeInfo: event.get('requireAttendeeInfo'),
    sold,
    salesStartDate: event.get('salesStartDate'),
    salesEndDate: event.get('salesEndDate')
  }
}

async function setPersonalInfo(attendee, address) {
  const attendeeInfo = new (Parse.Object.extend('PersonalInformation'))();
  const addressObject = new (Parse.Object.extend('Address'))();
  addressObject.set('name', address.name + '');
  addressObject.set('address1', address.address1 + '');
  addressObject.set('address2', address.address2 + '');
  addressObject.set('city', address.city + '');
  addressObject.set('country', address.country + '');
  console.log('\n6')

  attendeeInfo.set('firstName', attendee.firstName + '');
  attendeeInfo.set('middleName', attendee.middleName + '');
  attendeeInfo.set('lastName', attendee.lastName + '');
  attendeeInfo.set('phoneNumber', attendee.phoneNumber + '');
  attendeeInfo.set('organization', attendee.organization + '');
  attendeeInfo.set('email', attendee.email + '');
  attendeeInfo.set('address', await addressObject.save(null, {useMasterKey: true}));

  return await attendeeInfo.save(null, {useMasterKey: true})
}

function getWeekendStart() {
  let friday = new Date();
  friday.setDate(friday.getDate() - (friday.getDay() - 1) + 4)
  friday.setHours(18, 0, 0, 0)
  if (friday.getTime() < (new Date()).getTime()) {
    friday = new Date();
  }
  return friday;
}

function getWeekendEnd() {
  const sunday = new Date();
  sunday.setDate(sunday.getDate() - (sunday.getDay() - 1) + 7);
  sunday.setHours(0, 0, 0, 0)
}
