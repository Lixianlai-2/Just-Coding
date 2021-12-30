let arr = [1, 2, 3, 5, 3, 1, 45, 6, 2];

// 正序排列

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

// 倒序排列
arr.sort(function (a, b) {
  // 简单说就是对大的那个数字进行处理，比如下面的就是a更大，a返回-1,a就排后面
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

arr.sort(function (a, b) {
  return a - b;
});

// 箭头函数自动return了
// 如果a>b，return 正数，a放前面；如果a<b，return 负数，b放后面；如果a = b，return 0，位置不变
arr.sort((a, b) => a - b);
