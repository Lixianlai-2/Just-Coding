console.log(this);

// 箭头函数外面一层的this是什么，它就是什么
let fn = () => console.log(arguments);

fn(1, 2, 3);
