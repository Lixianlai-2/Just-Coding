let obj = Object.create(common);
obj.name = "lxianlai";

let obj2 = Object.create(common);
obj2.name = "Frank";

let common = { toString: "xxx" };

let ob3j = Object.create(common, {
  name: "Jack",
});
