function solution(arr, query) {
  let ans = arr
  for (let i = 0; i < query.length; i++) {
    if (i % 2) {
      ans = ans.slice(query[i])
    } else {
      ans = ans.slice(0, query[i] + 1)
    }
  }
  return ans;
}