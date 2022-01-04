// let div1 = document.createElement("div");
// document.createElement("style");
// document.createElement("script");
// document.createElement("li");

// let text1 = document.createTextNode("新添加的内容");

// div1.appendChild(text1);
// // div1.innerText = "你好";
// // div1.textContent = "你好";

// // document.body.appendChild(div1);
// test.appendChild(div1);

let div = document.createElement("div");
test1.appendChild(div);
test2.appendChild(div);

test1.style.backgroundColor = "red";
test1.style.fontSize = "100px";

let div2 = test1.cloneNode(true);
body.appendChild(div2);
