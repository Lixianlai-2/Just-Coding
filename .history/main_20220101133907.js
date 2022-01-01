let china = "Great!";

function fn() {
  let a = 1;
  window.c = "C";
  function fn2() {
    function fn3() {
      console.log(china);
    }
  }
}

fn();
console.log(a); // 不存在
console.log(c);
