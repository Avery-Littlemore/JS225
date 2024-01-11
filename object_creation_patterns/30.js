function newPerson(name) {
  return Object.defineProperties({name}, {
    // name: {
    //   value: name,
    //   writeable: false,
    // },
    log: {
      value: function() {
      console.log(this.name);
      },
      writeable: false,
    },
  });
}

let me = newPerson('Shane Riley');
// console.log(me);
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley