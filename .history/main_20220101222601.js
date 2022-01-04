console.log(this);

// 箭头函数外面一层的this是什么，它就是什么
let fn = () => console.log(this);

fn.call(1);
fn.apply(1);
