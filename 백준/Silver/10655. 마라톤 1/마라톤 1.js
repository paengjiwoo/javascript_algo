const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const points = input.map(a => a.split(' ').map(x => +x))
let total = 0
for (let i = 1; i < N; i++) {
  total += Math.abs(points[i - 1][0] - points[i][0]) + Math.abs(points[i - 1][1] - points[i][1])
}
let ans = Infinity
for (let j = 1; j < N - 1; j++){
  let s1 = Math.abs(points[j - 1][0] - points[j][0]) + Math.abs(points[j - 1][1] - points[j][1])
  let s2 = Math.abs(points[j][0] - points[j + 1][0]) + Math.abs(points[j][1] - points[j + 1][1])
  let c1 = Math.abs(points[j - 1][0] - points[j + 1][0]) + Math.abs(points[j - 1][1] - points[j + 1][1])
  let curr = total - s1 - s2 + c1
  if (curr < ans) ans = curr
}
console.log(ans)