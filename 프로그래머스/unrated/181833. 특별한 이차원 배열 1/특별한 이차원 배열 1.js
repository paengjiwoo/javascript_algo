function solution(n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let arr = Array.from({length: n}, () => 0)
    arr[i] = 1
    ans.push(arr)
  }
  return ans;
}