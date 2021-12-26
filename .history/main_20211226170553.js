let obj = {
  name: "Lixianlai",
};

let obj2 = {
  age: 46,
};

"toString" in obj;
"toString" in obj2;

obj.toStrng = "xxx";
console.log(obj2.toStrng);
