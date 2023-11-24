function solution(arr, k) {
  let ans = Array.from({length : k}, () => -1)
  let point = 0
  for (num of arr) {
    if (!ans.includes(Number(num))) {
      ans[point] = Number(num)
      point += 1
    }
    if (point === k) {
      return ans
    }
  }
  return ans
}