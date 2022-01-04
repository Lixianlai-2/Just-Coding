Array.prototype.forEach2 = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
};

let arr = [1, 2, 3];

arr.forEach2.call(arr, (item) => {
  console.log(item);
});
