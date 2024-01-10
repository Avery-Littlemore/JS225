// let countdown = function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num -=1;
//   }
//   console.log('Done!');
// }

function countdown(count) {
  (function recursiveSub(n) {
    console.log(n)
    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n-1);
    }
  })(count);

}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!