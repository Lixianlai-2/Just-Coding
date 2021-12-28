// obj的原型是Object.prototype
let obj = new Object();

console.log(obj.__proto__);
let arr = new Array();

let fn = new Function();

let Square = function (width) {
  this.width = width;
};

let square = new Square();
