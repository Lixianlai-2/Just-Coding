// let grandpa = document.querySelector(".grandpa");
// let father = document.querySelector(".father");
// let son = document.querySelector(".son");

// son.addEventListener("click", (Event) => {
//   const savedCurrentTarget = Event.currentTarget;

//   setTimeout(() => {
//     console.log(Event.currentTarget);
//   }, 0);
// });

// 冒泡
// son.addEventListener("click", (Event) => {
//   console.log("儿子打印出来了吗");
// });

// father.addEventListener("click", (Event) => {
//   console.log("父亲打印出来了吗");
//   Event.stopPropagation();
// });

// grandpa.addEventListener("click", (Event) => {
//   console.log("爷爷有打印出来吗");
// });

let container = document.querySelector(".container");

container.addEventListener("wheel", (e) => {
  // 这是阻止冒泡的
  //   e.stopPropagation();

  // 这是阻止默认事件发生的
  e.preventDefault();
});

container.addEventListener("touchstart", (e) => {
  // 这是阻止冒泡的
  //   e.stopPropagation();

  // 这是阻止默认事件发生的
  e.preventDefault();
});
