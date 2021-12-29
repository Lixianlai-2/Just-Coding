let divList = document.querySelectorAll("div");

console.log(divList);
console.log(divList.__proto__);
console.log(divList.__proto__ === NodeList.prototype);
