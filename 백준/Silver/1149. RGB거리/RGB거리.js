const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const costs = input.map(a => a.split(' ').map(Number))

let dp = Array.from({length: N + 1}, () => Array.from({length: 3}, () => 0))

for (let i = 1; i <= N; i++) {
  const [R, G, B] = costs[i]
  dp[i][0] = R + Math.min(dp[i - 1][1], dp[i - 1][2])
  dp[i][1] = G + Math.min(dp[i - 1][0], dp[i - 1][2])
  dp[i][2] = B + Math.min(dp[i - 1][0], dp[i - 1][1])
}
console.log(Math.min(...dp[N]))