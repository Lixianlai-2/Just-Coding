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

for (let i = 0; i < 10; i++) {
  square[i] = Object.create(squarePrototype);
  square[i].width = squareWidth[i];
}
