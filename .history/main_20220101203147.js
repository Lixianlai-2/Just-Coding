"use strict";

function fn() {
  console.log(this);
  console.log("执行了");
}

fn.call(1); // 注意这里的fn并没有执行
