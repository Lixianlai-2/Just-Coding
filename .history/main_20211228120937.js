Array.from("123");
Array.from(123); // 数字无法被转化
Array.from(true); // 布尔值无法被转化
Array.from({ name: "Lixianlai" }); // 对象没有length无法被转化

Array.from({ 0: "a", 1: "b", 2: "c" }); // 没有length无法被转化
Array.from({ 0: "a", 1: "b", 2: "c", length: 3 }); // 有下标有length可以被转化

// 当设置的length比实际的小，只转化到length的那一行
Array.from({ 0: "a", 1: "b", 2: "c", length: 1 });
Array.from({ name: "Lixianlai", length: 1 }); // 对象没有length无法被转化
