const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input);

if (N % 2) console.log(0);
else {
  const dp = new Array(N + 1).fill(0);
  // 0인덱스로 새로운 모형 추가
  dp[0] = 1;
  dp[2] = 3;
  dp[4] = 11;
  for (let i = 6; i <= N; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    // 특별 모형 계산
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] = dp[i] + (dp[j] * 2);
    }
  }
  console.log(dp[N]);
}