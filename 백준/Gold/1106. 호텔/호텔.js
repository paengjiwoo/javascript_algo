const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// C : 호텔 고객 유치 최소 목표 인원 수
// N : 홍보 가능한 도시의 개수
const [C, N] = input[0].split(' ').map(Number);
const promo = input.map(a => a.split(' ').map(Number));
const dp = new Array(C + 101).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  // P : 각 도시 홍보 비용
  // A : 비용으로 얻을 수 있는 고객의 수
  const [P, A] = promo[i];

  for (let j = A; j <= C + 101; j++) {
    dp[j] = Math.min(dp[j], dp[j - A] + P)
  }
}

let ans = dp[C];
for (let i = C + 1; i < C + 101; i++) {
  if (ans > dp[i]) ans = dp[i];
}

console.log(ans);