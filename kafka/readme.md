# Kafka Event Sourcing Microservices (Node.js)

This project demonstrates **Event Sourcing–based microservices communication** using **Node.js** and **Apache Kafka**.

We have **two independent microservices** that communicate **asynchronously via Kafka events**, without calling each other directly.

---

## 🧠 Architecture Overview

```
Client
|
| POST /orders
v
Order Service
|
| OrderCreated Event
v
Kafka (order-events topic)
|
v
Payment Service
|
| PaymentCompleted Event
v
Kafka (payment-events topic)
```

---

## 🧱 Microservices

### 1️⃣ Order Service
- Creates orders
- Stores events (Event Sourcing)
- Publishes `OrderCreated` events to Kafka

### 2️⃣ Payment Service
- Consumes `OrderCreated` events
- Processes payment
- Publishes `PaymentCompleted` events

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Apache Kafka
- KafkaJS
- Docker & Docker Compose
- UUID

---

## 📂 Project Structure

```
kafka-event-sourcing-microservices
│
├── order-service
│   ├── package.json
│   └── src
│       ├── index.js
│       ├── kafka.js
│       ├── order.controller.js
│       └── eventStore.js
│
├── payment-service
│   ├── package.json
│   └── src
│       ├── index.js
│       ├── kafka.js
│       └── payment.handler.js
│
└── docker-compose.yml
```

---

## 📦 Kafka Topics

| Topic Name       | Purpose |
|-----------------|---------|
| `order-events`  | Order domain events |
| `payment-events`| Payment domain events |

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- Node.js (v18+ recommended)
- Docker Desktop
- Docker Compose

---

### 2️⃣ Start Kafka

From the root directory:

```bash
docker-compose up -d
```

Verify containers:

```bash
docker ps
```

You should see:
- zookeeper
- kafka

---

### 3️⃣ Create Kafka Topics

```bash
docker exec -it kafka bash
```

Inside the container:

```bash
kafka-topics --create \
  --topic order-events \
  --bootstrap-server localhost:9092 \
  --replication-factor 1 \
  --partitions 1

kafka-topics --create \
  --topic payment-events \
  --bootstrap-server localhost:9092 \
  --replication-factor 1 \
  --partitions 1
```

Exit container:

```bash
exit
```

---

### 4️⃣ Run Order Service

```bash
cd order-service
npm install
npm run dev
```

Runs on:

```
http://localhost:3001
```

---

### 5️⃣ Run Payment Service

```bash
cd payment-service
npm install
npm run dev
```

Payment service starts listening to Kafka events.

---

## 🧪 Testing the Flow

### Create an Order

```http
POST http://localhost:3001/orders
Content-Type: application/json

{
  "amount": 500
}
```

### Expected Behavior

**Order Service:**
- Stores OrderCreated event
- Publishes event to Kafka

**Payment Service:**
- Consumes OrderCreated event
- Processes payment
- Publishes PaymentCompleted event
