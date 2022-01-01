let person = {
  name: "Lixianlai",
  sayHi() {
    console.log(`你好，我叫` + this.name);
  },
};

// 自动将person传入到函数中作为this
person.sayHi();

person.sayHi.call(person);
