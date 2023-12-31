const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N  = parseInt(input[0])
let ans = 0

function distribution() {
  if (N < 6) {
    return 
  } else {
    for (let t = 2; t <= N - 3; t += 2) {
      for (let n = 3; n < N - t; n++) {
        if (n >= N - t - n + 2) {
          ans += 1
        } else {
          continue
        }
      }
    }
  }
}
distribution()
console.log(ans)