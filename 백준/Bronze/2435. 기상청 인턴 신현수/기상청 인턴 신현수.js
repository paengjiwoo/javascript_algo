const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const temp = input[1].split(' ').map(Number)

let ans = -100
for (let i = 0; i < temp.length - K + 1; i++) {
  let curr = 0
  for (let j = 0; j < K; j++) {
    curr += temp[i + j]
  }
  if (curr > ans) {
    ans = curr
  }
}
console.log(ans)