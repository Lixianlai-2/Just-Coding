function f1(p1, p2) {
  console.log(this, p1, p2);
}

let f2 = f1.bind({ name: "Lixianlai" });
f2();
