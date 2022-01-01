function fn() {
  let a = 1;
  window.c = "C";
}

fn();
console.log(a); // 不存在
console.log(c);
