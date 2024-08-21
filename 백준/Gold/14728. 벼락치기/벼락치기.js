const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// N : 시험 단원의 개수
const [N, total] = input.shift().split(' ').map(Number);

let dp = Array.from({length: total + 1}, () => 0);

for (let i = 0; i < N; i++) {
  const [time, score] = input[i].split(' ').map(Number);
  
  for (let j = total; j >= time; j--) {
    dp[j] = Math.max(dp[j], dp[j - time] + score);
  }
};

console.log(dp[total]);