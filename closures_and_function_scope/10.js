function greet(greeting, name) {
  console.log(greeting[0].toUpperCase() + greeting.slice(1) + ', ' + name + '!');
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello')
let sayHi = partial(greet, 'hi')

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!