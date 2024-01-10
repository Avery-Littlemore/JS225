// Write a program that uses two functions, add and subtract, to manipulate a running total value. 
// When you invoke either function with a number, it should add or subtract that number from the running 
// total and log the new total to the console. Usage looks like this:

var total = 0;

function addOrSub(sign) {
  return function(num) {
    total += num * sign;
    console.log(total);
  }
}

let add = addOrSub(1);
let subtract = addOrSub(-1);

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10