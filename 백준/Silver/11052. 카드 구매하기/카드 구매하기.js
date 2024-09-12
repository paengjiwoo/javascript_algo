const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(' ').map(Number);
const dp = new Array(N + 1).fill(0);

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < i + 1; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + P[j - 1]);
  }
}

console.log(dp[N])