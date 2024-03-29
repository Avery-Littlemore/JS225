// Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain 
// as the original object, and it should have the same own properties that return the same values or objects when accessed. 
// Use the code below to verify your implementation:

function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  
  Object.getOwnPropertyNames(object).forEach(propName => {
    newObj[propName] = object[propName]
  });

  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true

let a = {
  hasOwnProperty: 1,
};

console.log(shallowCopy(a)); 