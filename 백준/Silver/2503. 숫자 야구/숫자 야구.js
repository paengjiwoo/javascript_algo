const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
let ans = 0

for (let n = 123; n <= 987; n++) {
  const arr = n.toString().split('')
  if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[0] && !arr.includes('0')) {
    let flag = true
    for (let i = 1; i <= N; i++) {
      const clue = input[i].split(' ')
      let strike = 0
      let ball = 0

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (arr[x]===clue[0][y]) {
            if (x === y) {
              strike++
              break
            }
            ball++
          }
        }
      }
      if (strike !== parseInt(clue[1]) || ball !== parseInt(clue[2])) {
        flag = false
        break
      }
    }
  if (flag) ans++
  }
}

console.log(ans)