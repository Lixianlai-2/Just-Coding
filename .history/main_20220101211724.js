Array.prototype.forEach2 = function () {
  console.log(this);
};

let arr = [1, 2, 3];

arr.forEach2.call(arr);
