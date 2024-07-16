const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
let poles = input.map((a) => a.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
let dp = new Array(N + 1).fill(1);

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (poles[j][1] < poles[i][1]) {
      max = Math.max(max, dp[j])
    }
    dp[i] = max + 1;
  }
}

console.log(N - Math.max(...dp));