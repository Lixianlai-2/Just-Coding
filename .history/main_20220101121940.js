let fn = (name, age) => {
  console.log("Hello world!");
  console.log(`My name is ${name}, I'm ${age} years old`);
  return age;
};

let fn2 = fn;

fn("Lixianlai", 46);
