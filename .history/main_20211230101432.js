let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];

let arr2 = arr.map(function (el, i) {
  if (el === 0) {
    week.splice(i, 1, "周日");
  } else if (el === 1) {
    week.splice(i, 1, "周一");
  } else if (el === 2) {
    week.splice(i, 1, "周二");
  } else if (el === 3) {
    week.splice(i, 1, "周三");
  } else if (el === 4) {
    week.splice(i, 1, "周四");
  } else if (el === 5) {
    week.splice(i, 1, "周五");
  } else if (el === 6) {
    week.splice(i, 1, "周六");
  }
});
console.log(arr2); // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
