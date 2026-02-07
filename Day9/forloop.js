for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function () {
      console.log(i);
    }, i);
  })(i);
} 


// output:
// 0
// 1
// 2
// 3
// 4

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i);
}

// output:
// 5
// 5
// 5
// 5
// 5
