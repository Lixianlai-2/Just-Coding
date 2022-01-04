// 一个新的全局变量形成一个局部变量a
function fn() {
  var a = 2;
  console.log(a);
}

fn();

console.log("hi");
!(function () {
  var b = 3;
  console.log(b);
})();
