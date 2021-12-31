let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];

let arr2 = arr.map(function (el, i) {
  const hash = {
    0: "周日",
    1: "周一",
    2: "周二",
    3: "周三",
    4: "周四",
    5: "周五",
    6: "周六",
  };
  return hash[el];
});
console.log(arr2);
