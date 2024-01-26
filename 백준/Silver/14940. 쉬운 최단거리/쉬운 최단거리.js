const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ')
const map = input.map(a => a.split(' ').map(Number))
let ans = Array.from({length: n}, () => Array.from({length: m}, () => 0))
let visited = Array.from({length: n}, () => Array.from({length: m}, () => 0))

let q
let target = [0, 0]
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      target = [i, j]
      visited[i][j] = 1
      q = [[i, j]]
    }
  }
}

let temp, y, x, ny, nx
let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
while (q.length > 0) {
  [y, x] = q.shift()
  temp = ans[y][x]
  for (const dir of dirs) {
    ny = y + dir[0]
    nx = x + dir[1]
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue
    if (map[ny][nx] && !visited[ny][nx]) {
      ans[ny][nx] = temp + 1
      visited[ny][nx] = 1
      q.push([ny, nx])
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1 && !ans[i][j]) ans[i][j] = -1
  }
}
for (let i = 0; i < n; i++) {
  console.log(ans[i].join(' '))
}