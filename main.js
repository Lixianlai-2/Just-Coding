let div = document.createElement("div");
test1.appendChild(div);
test2.appendChild(div);

test1.style.backgroundColor = "red";
test1.style.fontSize = "100px";

let div2 = test1.cloneNode(true);
document.body.appendChild(div2);

// div.parentNode.removeChild(div);
div.remove();
div = null;
test2.appendChild(div);
