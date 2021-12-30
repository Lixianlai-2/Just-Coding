let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];

let arr2 = arr.map(function (el, i) {
  if (el === 0) {
    arr.splice(i, 1, "周日");
  } else if (el === 1) {
    arr.splice(i, 1, "周一");
  } else if (el === 2) {
    arr.splice(i, 1, "周二");
  } else if (el === 3) {
    arr.splice(i, 1, "周三");
  } else if (el === 4) {
    arr.splice(i, 1, "周四");
  } else if (el === 5) {
    arr.splice(i, 1, "周五");
  } else if (el === 6) {
    arr.splice(i, 1, "周六");
  }

  return arr[i];
});
console.log(arr2); // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
