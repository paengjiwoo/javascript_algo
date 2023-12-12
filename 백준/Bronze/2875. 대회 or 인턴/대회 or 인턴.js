const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, M, K] = input.map(num => Number(num))

let max = 0
for (let i = 0; i <= K; i++) {
  const girl = Math.floor((N - i) / 2)
  const boy = M - (K - i)
  const min = Math.min(girl, boy)
  if (max < min) {
    max = min
  }
}

console.log(max)