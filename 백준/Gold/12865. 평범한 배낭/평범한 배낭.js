const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const luggage = input.map(a => a.split(' ').map(Number))
let dp = Array.from({length: K + 1}, () => 0)

for (let i = 1; i <= N; i++) {
  let [W, V] = luggage[i]
  
  // 준서가 버틸 수 있는 최대 무게 K에서
  // 현재 선택된 짐을 담았을때 가치 V가 최대가 될 수 있는지 확인해나간다.
  for (let l = K; l >= W; l--) {
    dp[l] = Math.max(dp[l], dp[l - W] + V)
  }
}
console.log(dp[K])