let a ;

for()
function fn() {
  setTimeout(() => {
    console.log(a);
  }, 0);
}

fn();
a = 2;

// 打印出2
