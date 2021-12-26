let square = [];

let squareWidth = [3, 4, 5, 6, 7, 8, 8, 9, 9, 2];

let squarePrototype = {
  width: squareWidth[i],
  getArea() {
    return this.width * this.width;
  },
  getLength() {
    return this.width * 4;
  },
};
