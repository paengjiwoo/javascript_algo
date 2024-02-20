const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = Number(input)
let dp = Array.from({length: N + 1}, () => 0)

for (let i = 1; i <= N; i++) 
  dp[i] = i

let e = parseInt(Math.sqrt(N))
for (let i = e; i > 1; i--) {
  for (let j = i * i; j <= N; j++) {
    dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
  }
}
console.log(dp[N])