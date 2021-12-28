// obj的原型是Object.prototype
let obj = new Object();

// arr的原型是Array.prototype
let arr = new Array();

// fn的的原型是Function.prototype
let fn = new Function();

let Square = function (width) {
  this.width = width;
};

// square的原型是Square.prototype
let square = new Square();
