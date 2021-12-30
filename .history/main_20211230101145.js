let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];
let week = [];
let arr2 = arr.map(function (el) {
  if (el === 0) {
    week.push("周日");
  } else if (el === 1) {
    week.push("周一");
  } else if (el === 2) {
    week.push("周一");
  } else if (el === 3) {
    week.push("周一");
  } else if (el === 4) {
    week.push("周一");
  } else if (el === 5) {
    week.push("周一");
  } else if (el === 6) {
    week.push("周一");
  }
});
console.log(arr2); // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
