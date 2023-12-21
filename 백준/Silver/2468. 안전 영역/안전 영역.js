const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const map = []
for (let i = 1; i < N + 1; i++) {
  map.push(input[i].split(' ').map(Number))
}

const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]

function search(n, i, j, visited) {
  let next = [[i, j]]
  while (next.length) {
    const [y, x] = next.shift()
    for (const dir of dirs) {
      ny = y + dir[0]
      nx = x + dir[1]
      if (ny >= 0 && ny < N && nx >= 0 && nx < N) {
        if (map[ny][nx] > n && !visited[ny][nx]) {
          visited[ny][nx] = true
          next.push([ny, nx])
        }
      }
    }
  }
}

let maxCnt = 0
for (let n = 0; n < 101; n++) {
  let visited = Array.from({length: N}, () => Array.from({length: N}, () => false))
  let curr = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] > n && !visited[i][j]) {
        curr++;
        visited[i][j] = true
        search(n, i, j, visited)
      } 
    }
  }
  maxCnt = Math.max(maxCnt, curr)
}
console.log(maxCnt)