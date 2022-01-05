let div = document.querySelector("div");
console.log(div);

travel = (node, fn) => {
  fn(node);
  if (node.children) {
    for (let i = 0; i < node.children; i++) {
      travel(node.children[i], fn);
    }
  }
};

travel(div, (node) => console.log(node));
