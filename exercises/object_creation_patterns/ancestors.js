// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. 



// name property added to make objects easier to identify
const foo = {name: 'foo'};

const bar = Object.create(foo);
// console.log(Object.getPrototypeOf(bar));
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let currentObj = Object.getPrototypeOf(this);
  let array = [];
  while (currentObj !== null) {
    if (currentObj.hasOwnProperty('name')) {
      array.push(currentObj.name);
    } else {
      array.push('Object.prototype');
    }
    // console.log(array);
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return array;
}

// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']