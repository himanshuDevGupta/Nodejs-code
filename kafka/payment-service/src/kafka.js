const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'payment-service',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'payment-group' });
const producer = kafka.producer();

module.exports = { kafka, consumer, producer };