/**
 * ======================================================
 * IIFE (Immediately Invoked Function Expression)
 * TypeScript – Complete Explanation with Examples
 * ======================================================
 *
 * What is IIFE?
 * -------------
 * An IIFE is a function expression that:
 * 1. Is created
 * 2. Is executed immediately
 * 3. Runs only once
 * 4. Creates a private scope
 *
 * Why use IIFE?
 * --------------
 * - Avoid global scope pollution
 * - Create private variables
 * - Encapsulate logic
 * - Module pattern (before ES6 modules)
 */

/* =====================================================
   1️⃣ BASIC IIFE
   ===================================================== */

(function (): void {
  console.log("Basic IIFE executed");
})();

/**
 * Flow:
 * - Function expression is created
 * - Immediately invoked using ()
 * - Execution context created
 * - Code runs
 * - Context destroyed
 */

/* =====================================================
   2️⃣ ARROW FUNCTION IIFE
   ===================================================== */

((): void => {
  console.log("Arrow IIFE executed");
})();

/**
 * Note:
 * - Arrow IIFE does NOT have its own `this`
 * - No arguments object
 */

/* =====================================================
   3️⃣ PARAMETERIZED IIFE
   ===================================================== */

((name: string): void => {
  console.log(`Hello, ${name}`);
})("Himanshu");

/**
 * Useful when passing configuration or runtime values
 */

/* =====================================================
   4️⃣ IIFE WITH RETURN VALUE
   ===================================================== */

const result: number = ((): number => {
  const a: number = 10;
  const b: number = 20;
  return a + b;
})();

console.log("Result from IIFE:", result);

/* =====================================================
   5️⃣ PRIVATE SCOPE DEMONSTRATION
   ===================================================== */

((): void => {
  const secretKey: string = "PRIVATE_KEY";
  console.log("Inside IIFE:", secretKey);
})();

// ❌ Error: secretKey is not accessible here
// console.log(secretKey);

/**
 * Explanation:
 * Variables inside IIFE are NOT added to global scope
 */

/* =====================================================
   6️⃣ MODULE PATTERN USING IIFE
   ===================================================== */

const CounterModule = (() => {
  let count: number = 0; // private variable

  return {
    increment(): number {
      count++;
      return count;
    },
    decrement(): number {
      count--;
      return count;
    },
    getCount(): number {
      return count;
    }
  };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
console.log(CounterModule.decrement()); // 1

/**
 * count is private and cannot be accessed directly
 * CounterModule.count ❌
 */

/* =====================================================
   7️⃣ IIFE FOR INITIALIZATION / BOOTSTRAP
   ===================================================== */

((): void => {
  console.log("Application initialized");
})();

/**
 * Common use:
 * - App startup logic
 * - Environment setup
 * - One-time execution
 */

/* =====================================================
   8️⃣ IIFE VS NORMAL FUNCTION
   ===================================================== */

// Normal Function
function normalFunction(): void {
  console.log("Normal function executed");
}

normalFunction(); // called explicitly

// IIFE
((): void => {
  console.log("IIFE executed immediately");
})();

/**
 * Difference:
 * - Normal function → reusable
 * - IIFE → one-time execution
 */

/* =====================================================
   9️⃣ EXECUTION CONTEXT FLOW (COMMENT)
   ===================================================== */

/**
 * JavaScript Engine Flow for IIFE:
 *
 * 1. Code parsed
 * 2. Function expression created
 * 3. Immediate invocation ()
 * 4. Execution context pushed to call stack
 * 5. Variables initialized
 * 6. Function body executed
 * 7. Return value handled
 * 8. Execution context popped from stack
 */

/* =====================================================
   🔟 INTERVIEW SUMMARY
   ===================================================== */

/**
 * Interview One-Liner:
 *
 * "An IIFE is a JavaScript function expression that runs
 * immediately after creation, creating a private scope
 * and preventing global namespace pollution."
 */
