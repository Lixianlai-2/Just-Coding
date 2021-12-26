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
  let obj = Object.create(squarePrototype);
  obj.width = width;
};

for (let i = 0; i < 10; i++) {
  // 将square[0]到square[9]的原型都指定为squarePrototype，这样就有面积函数和周长函数了
  square[i] = Object.create(squarePrototype);
  // 然后设置正方形的边长
  square[i].width = squareWidth[i];
}
