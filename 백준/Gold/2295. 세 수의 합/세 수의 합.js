const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const set = new Set();
let K = 0;
input = input.map(Number).sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    const sum = input[i] + input[j];
    const sub = input[i] - input[j];

    if (!set.has(sum)) set.add(sum);

    if (set.has(sub)) K = Math.max(K, input[i]);
  }
}

console.log(K);