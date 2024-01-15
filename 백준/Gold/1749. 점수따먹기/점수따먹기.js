const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const arr = input.map(a => a.split(' ').map(Number))

let prefix = Array.from({length: N + 1}, () => Array.from({length: M + 1}, () => 0))
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefix[i][j] = arr[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] 
  }
}

// 최대의 합
let ans = -400000001
for (let y1 = 1; y1 <= N; y1++) {
  for (let x1 = 1; x1 <= M; x1++) {
    for (let y2 = y1; y2 <= N; y2++) {
      for (let x2 = x1; x2 <= M; x2++) {
        const curr = prefix[y2][x2] - prefix[y1 - 1][x2] - prefix[y2][x1 - 1] + prefix[y1 - 1][x1 - 1]
        if (ans < curr) ans = curr
      }
    }
  }
}
console.log(ans)