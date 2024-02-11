const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input.shift().split(' ').map(Number)
const nums = input[0].split(' ').map(Number)
let cnt = 0

function solve(idx, sum) {
  if (sum === S && idx) {
    cnt++
  }

  for (let i = idx; i < N; i++) {
    solve(i + 1, sum + nums[i])
  }
}
solve(0, 0)
console.log(cnt)