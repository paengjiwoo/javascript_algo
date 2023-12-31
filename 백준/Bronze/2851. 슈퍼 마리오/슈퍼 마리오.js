const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number)
let sum = 0
for (const m of arr) {
  sum += m
  if (sum >= 100) {
    if (100 - (sum - m) < sum - 100) {
      sum -= m
      break
    }
  }
}
console.log(sum)