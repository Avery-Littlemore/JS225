function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);


// In the following code, when can JavaScript garbage collect the value ["Steve", "Edie"]?
// After the program ends or until helloSteveAndEdie is reassigned. It is kept within the closure of the makeHello function invocation