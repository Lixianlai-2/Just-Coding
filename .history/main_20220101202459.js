"use strict";

function fn() {
  console.log(this);
}

fn.call(1);
