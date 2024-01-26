const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift())

let ans = []
for (let t = 0; t < T; t++) {
  cnt = 0
  let map = new Map
  const N = input[2 * t]
  const dots = input[2 * t + 1].split(' ').map(Number).sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    map.set(dots[i], 1)
  }
  for (let i = 0; i < N; i++) {
    for (let j = i + 2; j < N; j++) {
      curr = (dots[i] + dots[j]) / 2
      if (curr % 1 !== 0) continue
      if (map.has(curr)) cnt++;
    }
  }
  ans.push(cnt)
}
console.log(ans.join('\n'))