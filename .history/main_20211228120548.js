Array.from("123");
Array.from(123); //
Array.from(true); //
Array.from({ name: "Lixianlai" }); //
Array.from({ 0: "a", 1: "b", 2: "c" }); //
Array.from({ 0: "a", 1: "b", 2: "c", length: 3 }); //

// 当设置的length比实际的小
Array.from({ 0: "a", 1: "b", 2: "c", length: 1 }); //
