const express = require('express');
const bodyParser = require('body-parser');
const { producer } = require('./kafka');
const { createOrder } = require('./order.controller');

const app = express();
app.use(bodyParser.json());

app.post('/orders', createOrder);

async function start() {
  await producer.connect();
  console.log('Order Service Kafka Producer connected');

  app.listen(3001, () => {
    console.log('Order Service running on port 3001');
  });
}

start();