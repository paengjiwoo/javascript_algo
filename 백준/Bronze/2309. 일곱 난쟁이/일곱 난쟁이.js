const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const heights = input.map(Number)
let ans = []

for (let i = 12; i < 99; i++) {
  const ex = i.toString().split('')
  if (ex[0] !== ex[1] && !ex.includes('0')) {
    let sum = 0
    for (let j = 1; j < 10; j++) {
      if (!ex.includes(j.toString())) {
        sum += heights[j-1]
      }
    }
    if (sum === 100) {
      for (let j = 1; j < 10; j++) {
        if (!ex.includes(j.toString())) {
          ans.push(heights[j-1])
        }
      }
      break
    }
  }
}
ans = ans.sort((a, b) => a - b)
for (const h of ans) {
  console.log(h)
}