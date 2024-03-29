let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // Uncaught TypeError: ninja.swingSword is not a function
// In this case, we didn't add a new method to the constructor function's prototype object by mutating it, 
// but rather made it point to a different object. The ninja object, meanwhile, still inherited from the 
// original prototype object, therefore it couldn't find a swingSword method anywhere on its prototype chain.