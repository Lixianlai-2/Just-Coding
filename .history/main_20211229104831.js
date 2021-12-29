let arr1 = [1, 2, 3, 4, 5];

arr1["随意key"] = "随便value";

for (let i = 0; i < arr1.length; i++) {
  console.log(`${i}:${arr1[i]}}`);
}
