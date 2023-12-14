const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(num => Number(num))
const arr = input.slice(1)
for (let l = 0; l < N; l++) {
  arr[l] = arr[l].split(' ').map(n => Number(n))
}

let visited = Array.from({length: N}, () => Array.from({length: M}, () => 0))
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
var max = 0

// 백트래킹
const polyomino = (y, x, sum, depth) => {
  if (depth === 3) {
    max = Math.max(max, sum)
    return
  } else {
    for (const dir of dirs) {
      const ny = y + dir[0]
      const nx = x + dir[1]
      if (ny >= 0 && ny < N && nx >= 0 && nx < M & !visited[ny][nx]) {
          
          // 특수모형 처리
          if (depth == 1) {
            visited[ny][nx] = 1
            polyomino(y, x, sum + arr[ny][nx], depth + 1)
            visited[ny][nx] = 0
          }

          visited[ny][nx] = 1
          polyomino(ny, nx, sum + arr[ny][nx], depth + 1)
          visited[ny][nx] = 0
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = 1
    polyomino(i, j, arr[i][j], 0)
    visited[i][j] = 0
  }
}
console.log(max)