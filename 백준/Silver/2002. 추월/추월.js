const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

let Dae = new Map();
for (let i = 0; i < N; i++) { Dae.set(input[i], i) };

let cnt = 0;
for (let j = N; j < 2 * N; j++) {
  const check = Dae.get(input[j]);
  for (let c = j + 1; c < 2 * N; c++) {
    if (Dae.get(input[c]) < check) { cnt++; break; }
  }
}

console.log(cnt);