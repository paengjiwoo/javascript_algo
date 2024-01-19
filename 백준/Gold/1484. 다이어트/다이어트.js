const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const G = Number(input)

let temp = 1
let curr = 2
let ans = []
while (curr * curr - (curr - 1) * (curr - 1) <= G) {
  const cal = curr * curr - temp * temp
  if (cal === G) {
    ans.push(curr)
    curr++;
    temp++;
  } else if (cal < G) curr++;
  else if (cal > 0) temp++;
}
console.log(ans.length > 0 ? ans.join(' ') : -1)