let createCircle = function (radius) {
  this.radius = radius;
};

createCircle.prototype.getArea = function () {
  // Math.pow(7, 2);  // 7的2次方49
  return Math.PI * Math.pow(this.radius, 2);
};

createCircle.prototype.getLength = function () {
  return Math.PI * 2 * this.radius;
};
