// Similar to the problem above, without using Object.create, create a begetObject method that you can call on 
// any object to create an object inherited from it:

let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true