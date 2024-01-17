const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift())

let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
function search(y, x, field, N, M) {
  let q = [[y, x]]
  while (q.length > 0) {
    const [y, x] = q.shift()
    for (const dir of dirs) {
      const ny = y + dir[0]
      const nx = x + dir[1]
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && field[ny][nx]) {
        field[ny][nx] = 0
        q.push([ny, nx])
      }
    }
  }
}

let ans = []
for (let t = 0; t < T; t++) {
  const [M, N, K] = input.shift().split(' ').map(Number)
  let field = Array.from({length: N}, () => Array.from({length: M}, () => 0))
  for (let k = 0; k < K; k++) {
    const [x, y] = input.shift().split(' ').map(Number)
    field[y][x] = 1
  }

  let cnt = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j]) {
        field[i][j] = 0
        search(i, j, field, N, M)
        cnt++;
      }
    }
  }
  ans.push(cnt)
}
console.log(ans.join('\n'))