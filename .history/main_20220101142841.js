// x和y就是形参
function add(x, y) {
  var x = arguments[0];
  var y = arguments[1];
  return x + y;
}

add(1, 2); // 1和2就是实参
