
// Use the OLOO pattern to create an object prototype that we can use to create pet objects. 
// let PetPrototype = {
//   sleep() {
//     console.log('I am sleeping');
//   },
  
//   wake() {
//     console.log('I am awake');
//   },
  
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },
// }

// Convert your code from the previous exercise to use the pseudo-classical object creation pattern using a Pet constructor.
function Pet(animal, name) {
  this.animal = animal;
  this.name = name;
  return this;
}

Pet.prototype.sleep = function() {
  console.log('I am sleeping');
}

Pet.prototype.wake = function() {
  console.log('I am awake');
}

let pudding = new Pet('Cat', 'Pudding');
let neptune = new Pet('Fish', 'Neptune');
// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake