function outer() {
  var x = 10;
  return function inner(value) {
    return x + value;
  }
}

var y = outer(); 
// the execution of outer has finished here
// the memory assigned to variable x should be freed
// and we must not be able to access the value of x from here on

y(100);
// because of closures we can access x when we are calling y()
// this call returns 110 because x is accessible to the inner function