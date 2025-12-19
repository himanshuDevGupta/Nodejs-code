const { consumer, producer } = require('./kafka');
const { handleOrderCreated } = require('./payment.handler');

async function start() {
  await producer.connect();
  await consumer.connect();

  await consumer.subscribe({
    topic: 'order-events',
    fromBeginning: true
  });

  console.log('Payment Service listening for OrderCreated events');

  await consumer.run({
    eachMessage: async ({ message }) => {
      const event = JSON.parse(message.value.toString());

      if (event.type === 'OrderCreated') {
        await handleOrderCreated(event);
      }
    }
  });
}

start();