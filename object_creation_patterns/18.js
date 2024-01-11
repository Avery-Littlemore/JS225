// Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

function neww(constructor, args) {
  // return new constructor(...args);
  // console.log(new constructor(...args));
  let object = Object.create(constructor.prototype)
  let result = constructor.apply(object, args);
  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  if (!lastName) {
    return { error: 'missing last name' };
  }
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}

// let john = neww(Person, ['John']);
// john.greeting();          //  should result in an error if executed, since `this` is not return.
// console.log(john.error) // should log 'missing last name'
// console.log(john.constructor);         // should not point to `Person.prototype`.