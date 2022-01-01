"use strict";

function fn() {
  console.log(arguments);
  console.log(this);
}

fn(1, 2, 3);
