// obj的原型是Object.prototype
let obj = new Object();
obj.__proto__ === Object.prototype;

// arr的原型是Array.prototype
let arr = new Array();
arr.__proto__ === Array.prototype;

// fn的的原型是Function.prototype
let fn = new Function();
fn.__proto__ === Function.prototype;

let Square = function (width) {
  this.width = width;
};

// square的原型是Square.prototype
let square = new Square();
square.__proto__ === Square.prototype;
