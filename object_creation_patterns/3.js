function getDefiningObject(object, propKey) {
  let currentObj = object;
  while (currentObj && Object.getOwnPropertyNames(currentObj).includes(propKey) === false) {
    currentObj = Object.getPrototypeOf(currentObj);
  }
  
  return currentObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null