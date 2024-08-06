const fs = require("fs");
let stairs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(stairs[0]);
stairs = stairs.map(Number);
const dp = new Array(N + 1).fill(0);
dp[1] = stairs[1];
dp[2] = dp[1] + stairs[2];

for (let i = 3; i <= N; i++) {
  dp[i] = stairs[i] + Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]);
};

console.log(dp[N]);