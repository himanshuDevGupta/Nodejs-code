// PROBLEM 3 — Order Deduplication 
// Problem Statement
// You are given orders.Keep latest order per orderId.
// Rules:
// Latest = highest timestamp
// Ignore orders with missing orderId
// Return result as array
 
function runTests(fn) {
  const tests = [];
  function check(actual, expected, name) {
    tests.push({
      name,
      pass: JSON.stringify(actual) === JSON.stringify(expected)
    });
  }
  check(
    fn([
      { orderId: 1, ts: 100 },
      { orderId: 1, ts: 200 }
    ]),
    [{ orderId: 1, ts: 200 }],
    'keeps latest order'
  );
  check(
    fn([
      { ts: 100 },
      { orderId: 2, ts: 300 }
    ]),
    [{ orderId: 2, ts: 300 }],
    'ignores missing orderId'
  );
  check(
    fn([
      { orderId: 3, ts: 100 },
      { orderId: 3, ts: 50 }
    ]),
    [{ orderId: 3, ts: 100 }],
    'handles unordered input'
  );
  tests.forEach(t => console.log(`${t.pass ? '✅' : '❌'} ${t.name}`));
}


function deduplicateOrders(orders) {
 // Write function logic here
}

runTests(deduplicateOrders);

// output
// ❌ keeps latest order
// ❌ ignores missing orderId
// ❌ handles unordered input


// Need 
// ✅ keeps latest order
// ✅ ignores missing orderId
// ✅ handles unordered input