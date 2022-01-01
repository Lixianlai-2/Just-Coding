"use strict";

function fn() {
  console.log("执行1");
  console.log(this);
  console.log("执行3");
}

fn.call(1); // 注意这里的fn并没有执行
