function foo() {
  var a = 100; //the variable a belongs to the scope of function foo
  /*

    function body 

  */
}

var b = 1000; 
//the variable b is outside any function so it belongs to the global scope
var c = a * 100; //Error:: a cannot be accessed outside foo