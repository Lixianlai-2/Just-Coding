let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
let sum = scores.reduce((sum, n) => {
  //   注意必须要return
  if (n % 2 === 1) {
    return (sum += n);
  } else {
    return (sum += 0);
  }
}, 0);
console.log(sum); // 奇数之和：598

// filter 答案
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
let scores2 = scores.filter((n) => n >= 60);
console.log(scores2); //  [95,91,82,72,85,67,66, 91]

//reduce答案
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91];
let sum = scores.reduce((sum, n) => {
  return n % 2 === 0 ? sum : sum + n;
}, 0);
console.log(sum); // 奇数之和：598
