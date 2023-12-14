const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const mushrooms = input.map(num => Number(num))
let sum = 0

for (const mush of mushrooms) {
  sum += mush
  if (sum >= 100) {
    if (sum - 100 > 100 - (sum - mush)) {
      sum -= mush
      break
    }
  }
}
console.log(sum)