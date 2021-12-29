let arr1 = [1, 2, 3, 4, 5];

arr1["随意key"] = "随便value";

Object.keys(arr1);

Object.values(arr1);

for (let i in arr1) {
  console.log(i);
}
