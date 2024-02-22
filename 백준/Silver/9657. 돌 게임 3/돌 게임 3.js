const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input)
const dp = Array.from({length: N + 1}, () => 0)

dp[1] = dp[3] = dp[4] = 1
dp[2] = 0

for (let i = 5; i <= N; i++) {
  if (!dp[i - 1] || !dp[i - 3] || !dp[i - 4])
    dp[i] = 1
  else { dp[i] = 0 }
}
console.log(dp[N] ? 'SK' : 'CY')