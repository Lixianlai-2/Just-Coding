let person = {
  name: "Lixianlai",
  sayHi() {
    console.log(`你好，我叫` + this.name);
  },
};

person.sayHi();
