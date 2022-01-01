let a = 1;
function fn() {
  setTimeout(() => {
    console.log(a);
  }, 0);
}

a = 2;
fn();

// 打印出2
