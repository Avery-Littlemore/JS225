let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaA);
console.log(ninjaB);

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true