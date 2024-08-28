const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const nums = input.shift().split(' ').map(Number);

const M = Number(input.shift());
const questions = input.map(a => a.split(' ').map(Number));

const dp = Array.from({length: N + 1}, () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  dp[i][i] = 1;
  if (nums[i - 1] === nums[i]) dp[i][i + 1] = 1;
};

// j는 수열의 길이를 의미
for (let j = 3; j <= N; j++) {
  for (let s = 1; s <= N - j + 1; s++) {
    if (nums[s - 1] === nums[s + j - 2] && dp[s + 1][s + j - 2]) {
      dp[s][s + j - 1] = 1;
    }
  }
};

const ans = [];

for (const [s, e] of questions) {
  ans.push(dp[s][e]);
}

console.log(ans.join('\n'));