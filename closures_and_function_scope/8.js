let a = [1];

function add(b) {
  a = a.concat(b);
} // GC [1]

function run() {
  let c = [2];
  let d = add(c); 
} // GC [2]

run(); 
// We can GC [1, 2] only after the program ends. Since a is a global variable, the reference to [1, 2] doesn't go away until JS 
// discards the a variable, and that only occurs when the program terminates.

// In the following code, when can JavaScript garbage collect each of the following arrays? [1], [2], and [1, 2].