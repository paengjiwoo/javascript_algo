const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const farmland = input.map(a => a.split(' ').map(Number));
const sizes = Array.from({length: M + 1}, () => Array(N + 1).fill(0));

let max = 0;
for (let i = 1; i <= M; i++) {
  for (let j = 1; j <= N; j++) {
    if (farmland[i - 1][j - 1] > 0) continue;
    sizes[i][j] = Math.min(sizes[i - 1][j], sizes[i - 1][j - 1], sizes[i][j - 1]) + 1;
    if (max < sizes[i][j]) max = sizes[i][j]
  }
}

console.log(max)