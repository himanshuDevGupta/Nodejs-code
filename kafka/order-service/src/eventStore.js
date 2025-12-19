const events = [];

function saveEvent(event) {
  events.push(event);
  console.log('Event stored:', event);
}

module.exports = { saveEvent };