class CreateRectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea = function () {
    return this.width * this.height;
  };

  getLength = function () {
    return this.width * 2 + this.height * 2;
  };
}

let rectAngle1 = new CreateRectangle(3, 4);
rectAngle1.getArea();
rectAngle1.getLength();
