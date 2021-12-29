function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr); // 下标值，下标，整个数组
  }
}

forEach([1, 2, 3], function (value, key, wholeArray) {
  console.log(value, key, wholeArray);
});
