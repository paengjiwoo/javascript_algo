const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split("\n").map(Number);

const N = input[0];

const dp = Array(N + 1).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];
dp[3] = Math.max(input[1] + input[3], input[2] + input[3], dp[2]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i], dp[i - 1]);
}
console.log(dp[N]);