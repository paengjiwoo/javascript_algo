const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
let prefix = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => Array.from({length: 11}, () => 0)))

for (let i = 1; i <= N; i++) {
  const line = input[i - 1].split(' ').map(Number)
  for (let j = 1; j <= N; j++) {
    const curr = line[j - 1]
    for (let n = 1; n <= 10; n++) {
      prefix[i][j][n] = prefix[i - 1][j][n] + prefix[i][j - 1][n] - prefix[i - 1][j - 1][n] + (n === curr ? 1 : 0)
    }
  }
}

const Q = Number(input[N])
let ans = []
for (let i = N + 1; i <= N + Q; i++) {
  let res = 0
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number)
  for (let n = 1; n <= 10; n++) {
    if (prefix[x2][y2][n] - prefix[x1 - 1][y2][n] - prefix[x2][y1 - 1][n] + prefix[x1 - 1][y1 - 1][n]) res++;
  }
  ans.push(res)
}

console.log(ans.join('\n'))