function solution(arr, queries) {
  let ans = arr
  for (const query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      ans[i] += 1
    }
  }
  return ans;
}