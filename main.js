let firstChild = document.querySelector(".firstChild");
console.log(firstChild);

let siblings = [];

let c = firstChild.parentElement.children;

for (let i = 0; i < c.length; i++) {
  if (c[i] !== firstChild) {
    siblings.push(c[i]);
  }
}

console.log(siblings);
