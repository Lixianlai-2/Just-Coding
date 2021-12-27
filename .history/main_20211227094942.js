let square = [];

let squareWidth = [3, 4, 5, 6, 7, 8, 8, 9, 9, 2];

function Square(width) {
  // 给Square创造width属性，并将参数width赋值给它
  this.width = width;
}

Square.prototype.getArea = function () {
  return this.width * this.width;
};

Square.prototype.getLength = function () {
  return this.width * 4;
};
