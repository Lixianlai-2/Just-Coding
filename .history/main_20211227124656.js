let createRectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

createRectangle.prototype.getArea = function () {
  console.log(this);
  // Math.pow(7, 2);  // 7的2次方49
  return Math.PI * Math.pow(this.radius, 2);
};

createCircle.prototype.getLength = function () {
  console.log(this);
  return Math.PI * 2 * this.radius;
};

let circle1 = new createCircle(3);
circle1.getArea();
circle1.getLength();
