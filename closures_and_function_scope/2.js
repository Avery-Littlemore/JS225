function makeList() {
  let list = [];
  return function(item) {
    if (item) {
      if (list.includes(item)) {
        let idx = list.indexOf(item);
        list.splice(idx, 1);
        console.log(`${item} removed!`)
      } else {
        list.push(item);
        console.log(`${item} added!`)
      }
    } else if (list.length === 0) {
      console.log('The list is empty');
    } else {
      list.forEach(item => console.log(item));
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book