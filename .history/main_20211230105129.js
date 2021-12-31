let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
let sum = scores.reduce((sum, n) => {
  sum = sum + n;
  console.log(sum);
  console.log(n);
  //   if (n % 2 === 1) {
  //     sum += n;
  //   }
}, 0);
console.log(sum); // 奇数之和：598
