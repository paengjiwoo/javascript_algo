const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, M, K] = input.map(Number)
let max = 0
for (let i = 0; i <= K; i++) {
  const girl = Math.floor((N - i) / 2)
  const boy = M - (K - i)
  max = Math.max(max, Math.min(girl, boy))
}
console.log(max)