let square = [];

let squareWidth = [3, 4, 5, 6, 7, 8, 8, 9, 9, 2];

let squarePrototype = {
  getArea() {
    return this.width * this.width;
  },
  getLength() {
    return this.width * 4;
  },
};

let createSquare = function (width) {
  // 以squarePrototype为原型创造一个空对象
  let obj = Object.create(squarePrototype);
  // 给空对象增加一个属性，值为参数width
  obj.width = width;
};

for (let i = 0; i < 10; i++) {
  square[i] = createSquare(squareWidth[i]);

  console.log(squareWidth[i]);
}
