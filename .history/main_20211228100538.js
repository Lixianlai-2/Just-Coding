let createRectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

createRectangle.prototype.getArea = function () {
  return this.width * this.height;
};

createRectangle.prototype.getLength = function () {
  return this.width * 2 + this.height * 2;
};

let circle1 = new createRectangle(3, 4);
circle1.getArea();
circle1.getLength();
