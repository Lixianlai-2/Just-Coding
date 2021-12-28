// obj的原型是Object.prototype
let obj = new Object();
console.log(obj.__proto__ === Object.prototype);

// arr的原型是Array.prototype
let arr = new Array();

console.log(arr.__proto__ === Array.prototype);

// fn的的原型是Function.prototype
let fn = new Function();
console.log(fn.__proto__ === Function.prototype);

let Square = function (width) {
  this.width = width;
};

// square的原型是Square.prototype
let square = new Square();
console.log(square.__proto__ === Square.prototype);
