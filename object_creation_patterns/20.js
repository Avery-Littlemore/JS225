class Cat {
  constructor(name = 'Kitty') {
    this.name = name;
  }

  greet() {
    console.log(`I'm a cat named ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!")
  }
}

let kitty = new Cat();
let sophie = new Cat('Sophie');

kitty.greet();
kitty.rename('Harold');
kitty.greet();
sophie.greet();

Cat.genericGreeting();