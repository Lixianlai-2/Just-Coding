let a = 1;
let b = 2;

a + b;

function fn(n) {
  // 关键在于fn(1) 的时候返回1
  return n !== 1 ? n * fn(n - 1) : 1;
}
