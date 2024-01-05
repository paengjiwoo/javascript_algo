const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = Number(input)

let dp = Array.from({length: N + 1}, () => 0)
for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1
  if (!(i % 2)) {
    dp[i] = Math.min(dp[i], dp[i/2] + 1)
  }
  if (!(i % 3)) {
    dp[i] = Math.min(dp[i], dp[i/3] + 1)
  }
}
console.log(dp[N])