let CreateRectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

CreateRectangle.prototype.getArea = function () {
  return this.width * this.height;
};

CreateRectangle.prototype.getLength = function () {
  return this.width * 2 + this.height * 2;
};

let rectAngle1 = new CreateRectangle(3, 4);
rectAngle1.getArea();
rectAngle1.getLength();
