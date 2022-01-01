let person = {
  name: "Lixianlai",
  sayHi() {
    console.log(`你好，我叫` + this.name);
  },
};

let person2 = {
  name: "Mark Lee",
};

// 自动将person传入到函数中作为this
person.sayHi();

// 手动设置传输函数的对象
person.sayHi.call(person2);
