const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift())
const nums = input[0].split(' ').map(Number)

let dp = Array.from({length: n + 1}, () => 0)

let max = -1000 * n - 1
for (let i = 1; i <= n; i++) {
  dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1])
  if (max < dp[i]) max = dp[i]
}
console.log(max)