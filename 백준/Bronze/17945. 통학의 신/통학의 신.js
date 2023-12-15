const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B] = input.map(num => Number(num))
let set = new Set()
for (let i = -1000; i <= 1000; i++) {
  if (i * (2 * A - i) === B) {
    set.add(-i).add(-(2 * A - i))
  }
}
const ans = Array.from(set).sort((a, b) => a - b)
if (ans.length === 1) {
  const [first] = ans
  console.log(first)
} else {
  const [first, second] = ans
  console.log(first, second)
}