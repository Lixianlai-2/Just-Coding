let a = 1;
function fn() {
  setTimeout(() => {
    
  }, 0);
  console.log(a);
}

a = 2;
fn();

// 打印出2
