let square = [];

let squareWidth = [3, 4, 5, 6, 7, 8, 8, 9, 9, 2];

for (let i = 0; i < 10; i++) {
  square[i] = {
    width: squareWidth[i],
    getArea() {
      return this.width * this.width;
    },
    getLength() {
      return this.width * 4;
    },
  };
}
