let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  if (arr[i] === 2) {
    console.log(`${i}:${arr[i]}`);
    break;
  }
}
