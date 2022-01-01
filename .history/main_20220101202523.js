"use strict";

function fn() {
  console.log(this);
}

fn.call(1); // 注意这里的fn并没有执行
