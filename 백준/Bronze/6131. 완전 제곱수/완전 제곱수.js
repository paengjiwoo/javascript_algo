const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = parseInt(input)
let ans = 0

for (let a = 2; a <= 500; a++) {
  if (a * a - (a - 1) * (a - 1) > N) { 
    break
  } else {
    for (let b = 1; b < a; b++) {
      if (a * a - b * b === N) {
        ans += 1    
      }
    }
  }
}
console.log(ans)