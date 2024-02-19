const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const luggage = input.map(a => a.split(' ').map(Number))
let dp = Array.from({length: 100001}, () => 0)

for (let i = 1; i <= N; i++) {
  let [W, V] = luggage[i]

  for (let l = K; l >= W; l--) {
    dp[l] = Math.max(dp[l], dp[l - W] + V)
  }
}
console.log(dp[K])