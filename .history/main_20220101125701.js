let a ;

for(a = 0;a < 5; a++)
function fn() {
  setTimeout(() => {
    console.log(a);
  }, 0);
}

fn();
a = 2;

// 打印出2
