let createCircle = function (radius) {
  this.radius = radius;
};

createCircle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};
