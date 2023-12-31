const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const numbers = input.map(Number)
let ans = 0
let multiple = 1

while (true) {
  let cnt = 0
  for (let i = 0; i < 5; i++) {
    if (multiple % input[i] === 0) {
      cnt++;
    }
  }
  if (cnt >= 3) {
    ans = multiple
    break
  }
  multiple++;
}
console.log(ans)