const { producer } = require('./kafka');
const { v4: uuidv4 } = require('uuid');
const { saveEvent } = require('./eventStore');

async function createOrder(req, res) {
  const orderId = uuidv4();
  const { amount } = req.body;

  const event = {
    type: 'OrderCreated',
    data: {
      orderId,
      amount,
      status: 'CREATED'
    },
    timestamp: new Date().toISOString()
  };

  saveEvent(event);

  await producer.send({
    topic: 'order-events',
    messages: [{ key: orderId, value: JSON.stringify(event) }]
  });

  res.status(201).json({ message: 'Order created', orderId });
}

module.exports = { createOrder };