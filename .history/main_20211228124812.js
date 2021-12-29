let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

arr1.concat(arr2, arr3); // 可以多次合并

arr1.concat(arr1); // 可以合并其本身

console.log(arr1);
console.log(arr2);
console.log(arr3);
