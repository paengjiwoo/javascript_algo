const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const costs = input.map(a => a.split(' ').map(Number))

let dp = Array.from({length: N + 1}, () => Array.from({length: 3}, () => 0))

// 현재 순서의 집에 칠할 R, G, B를 선택하고
// 현재 선택한 색과 겹치지 않으면서, dp에 누적된 값이 적은 색을 선택해 더해나간다.
for (let i = 1; i <= N; i++) {
  const [R, G, B] = costs[i]
  dp[i][0] = R + Math.min(dp[i - 1][1], dp[i - 1][2])
  dp[i][1] = G + Math.min(dp[i - 1][0], dp[i - 1][2])
  dp[i][2] = B + Math.min(dp[i - 1][0], dp[i - 1][1])
}
// 마지막 순서의 집까지 더한 후 최솟값 구하기
console.log(Math.min(...dp[N]))