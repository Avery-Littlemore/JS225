function makeCounterLogger(startNum) {
  return function(endNum) {
    let counter = startNum;
    if (startNum > endNum) {
      while (counter >= endNum) {
        console.log(counter);
        counter -= 1;
      }
    } else {
      while (counter <= endNum) {
        console.log(counter);
        counter += 1;
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2