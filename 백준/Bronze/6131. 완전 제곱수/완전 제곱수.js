const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = parseInt(input)
let ans = 0

for (let b = 1; b <= 500; b++) {
  if (Number.isInteger(Math.sqrt(Math.pow(b, 2) + N))) {
    ans++
  }
}
console.log(ans)