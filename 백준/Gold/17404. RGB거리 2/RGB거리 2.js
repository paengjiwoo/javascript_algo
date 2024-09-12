const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = Number(input.shift());
let houses = input.map(a => a.split(' ').map(Number));
let ans = Infinity;

for (let i = 0; i < 3; i++) {
  let dp = Array.from({length: len}, () => new Array(3).fill(Infinity));
  
  dp[0][i] = houses[0][i];
  
  for (let j = 1; j < len; j++) {
    dp[j][0] = houses[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = houses[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = houses[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
  }
  
  for (let c = 0; c < 3; c++) {
    if (c !== i) {
      ans = Math.min(ans, dp[len - 1][c]);
    }
  }
}

console.log(ans);