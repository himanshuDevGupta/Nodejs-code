const { producer } = require('./kafka');

async function handleOrderCreated(event) {
  const { orderId, amount } = event.data;

  console.log(`Processing payment for order ${orderId}`);

  const paymentEvent = {
    type: 'PaymentCompleted',
    data: {
      orderId,
      amount,
      status: 'PAID'
    },
    timestamp: new Date().toISOString()
  };

  await producer.send({
    topic: 'payment-events',
    messages: [{ key: orderId, value: JSON.stringify(paymentEvent) }]
  });

  console.log('Payment completed for order:', orderId);
}

module.exports = { handleOrderCreated };