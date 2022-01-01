"use strict";

function fn() {
  console.log(this);
}

fn(1, 2, 3).call(1);
