function solution(arr, flag) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        res.push(arr[i])
      }
    } else if (!flag[i]) {
      for (let l = 0; l < arr[i]; l++) {
        res.pop()
      }
    }
  }
  return res;
}