const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dwarfs = input.map(Number).sort((a, b) => a - b)
const sum = dwarfs.reduce((acc, curr) => {
  return acc + curr
}, 0)

// 투포인터
let left = 0
let right = 8

while (true) {
  const curr = sum - dwarfs[left] - dwarfs[right]
  if (curr == 100) break;
  if (curr > 100) left++;
  if (curr < 100) right--;
}

for (let i = 0; i <= 8; i++) {
  if (i === left || i === right) continue;
  console.log(dwarfs[i])
}