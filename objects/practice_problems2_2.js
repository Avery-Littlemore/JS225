function makeCar(rate) {
  return {
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate;
    },
  }
}

let hatchback = makeCar(9);