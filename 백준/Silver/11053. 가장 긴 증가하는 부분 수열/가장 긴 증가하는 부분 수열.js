const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift())
const nums = input[0].split(' ').map(Number)

let dp = Array.from({length: N}, () => 1)

let cnt = 1
let ans = 1
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  if (ans < dp[i]) ans = dp[i]
}

console.log(ans)