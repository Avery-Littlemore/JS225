// Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs 
// every positive integer multiple of that number less than 100. Usage looks like this:

function makeMultipleLister(num) {
  let current = num;
  return function() {
    while (current < 100) {
      console.log(current);
      current += num;
    }  
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91