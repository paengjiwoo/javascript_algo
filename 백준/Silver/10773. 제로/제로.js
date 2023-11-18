const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0])

let nums = new Array()
for (let i = 1; i <= K; i++) {
  if (Number(input[i]) !== 0) {
    nums.push(input[i])
  } else {
    nums.pop()
  }
}
let ans = 0
nums.forEach(num => ans += Number(num))
console.log(ans)