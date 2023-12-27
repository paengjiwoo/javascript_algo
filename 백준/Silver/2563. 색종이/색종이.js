const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0])
let arr = Array.from({length:100}, () => Array.from({length:100}, () => 0))
let ans = 0

for (let n = 1; n < N + 1; n++) {
  const position = input[n].split(' ').map(Number)
  const x = position[0]
  const y = position[1]
  for (let i = y; i < y + 10; i++) {
    for (let j = x; j < x + 10; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = 1
        ans += 1
      }
    }
  }
}

console.log(ans)