function solution(arr) {
  let ans = arr
  for (let i = 0; i < arr.length; i++) {
    if (ans[i] >= 50 && ans[i] % 2 === 0) {
      ans[i] = ans[i] / 2
    } else if (ans[i] < 50 && ans[i] % 2) {
      ans[i] = ans[i] * 2
    }
  }
  return ans;
}