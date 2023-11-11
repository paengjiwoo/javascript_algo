const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ N, M ] = input[0].split(' ')
let baskets = Array.from({length: Number(N)}, () => 0)

for (let i = 1; i <= M; i++) {
  const balls = input[i].split(' ')
  for (let j = Number(balls[0]) - 1; j < Number(balls[1]); j++) {
    baskets[j] = balls[2]
  }
}
console.log(baskets.join(' '))