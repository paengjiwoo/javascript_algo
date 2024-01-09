const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const C = parseInt(input.shift())

function GCD(x, y) {
  if (y === 0) {
    return x
  }
  return GCD(y, x % y)
}

let memo = Array.from({length:1001}, () => 0)
memo[1] = 2
for (let i = 2; i < 1001; i++) {
  let cnt = 0
  for (let j = 1; j < i; j++) {
    if (GCD(i, j) === 1) {
      cnt++;
    }
  }
  memo[i] = memo[i - 1] + cnt
}
for (let c = 0; c < C; c++) {
  console.log(memo[parseInt(input[c])] * 2 - 1)
}
