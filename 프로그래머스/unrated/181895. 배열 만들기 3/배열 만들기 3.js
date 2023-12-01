function solution(arr, intervals) {
  let ans = []
  for (const interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i++) {
      ans.push(arr[i])
    }
  }
  return ans;
}