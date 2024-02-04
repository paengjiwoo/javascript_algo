const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const nums = input[0].split(' ').map(Number)
let visited = Array.from({length: N}, () => 0)
let ans = 0

function solve(temp, cnt, sum) {
  if (cnt === N) {
    if (ans < sum) ans = sum
    return
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue
    visited[i] = 1
    solve(nums[i], cnt + 1, sum + Math.abs(temp - nums[i]))
    visited[i] = 0
  }
}
for (let i = 0; i < N; i++) {
  visited[i] = 1
  solve(nums[i], 1, 0)
  visited[i] = 0
}
console.log(ans)