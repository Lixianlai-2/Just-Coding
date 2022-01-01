let a = 1;
function fn() {
  console.log(a);
}

a = 2;
fn();

// 不执行，因为没有调用
