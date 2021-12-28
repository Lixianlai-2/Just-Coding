let createCircle = function (radius) {
  this.radius = radius;
};

createCircle.prototype.getArea = function () {
  console.log(this);
  // Math.pow(7, 2);  // 7的2次方49
  return Math.PI * Math.pow(this.radius, 2);
};

createCircle.prototype.getLength = function () {
  console.log(this);
  return Math.PI * 2 * this.radius;
};
