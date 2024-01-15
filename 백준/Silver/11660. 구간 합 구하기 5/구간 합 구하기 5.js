const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
let arr = []
for (let a = 0; a < N; a++) {
  arr.push(input[a].split(' ').map(Number))
}
let dp = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 0))
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = arr[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1]
  }
}

let ans = []
for (let i = N; i < N + M; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number)
  ans.push(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1])
}
console.log(ans.join('\n'))