Promise.resolve("Start")
  .then((i) => {
    console.log("1:", i);
    return i + "-1";
  })
  .then((i) => {
    console.log("2:", i);
    throw new Error("test!");
  })
  .then((i) => {
    console.log("3:", i);
    return "test1";
  })
  .catch((err) => {
    console.log("teste");
    return "finally";
  })
  .then((i) => {
    console.log("4:", i);
  })     
  .finally(() => console.log("Done"));
  

// output:
// 1: Start
// 2: Start-1
// teste
// 4: finally
// Done


let promise = Promise.resolve(2);

promise.then(i => {
        console.log(i);
        return i * 2;
    })
    .then(i => {
        console.log(i);
        return i * 2;
    })
    .finally(i => {
        console.log(i);
        return i * 2;
    })
    .then(i => {
        console.log(i);
    });  


// output:
// 2
// 4
// undefined
// 8
