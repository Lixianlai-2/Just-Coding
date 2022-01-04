Array.prototype.forEach2 = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
};

let arr = [1, 2, 3];
