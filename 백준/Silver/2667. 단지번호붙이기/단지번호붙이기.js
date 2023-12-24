const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
let arr = []
for (let i = 1; i < N + 1; i++) {
  arr.push(input[i].split('').map(Number))
}
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
let num = 0
let blocks = []

function bfs(pos, blocks) {
  let cnt = 1
  arr[pos[0]][pos[1]] = 0
  q = [pos]
  while (q.length) {
    const [y, x] = q.shift()
    for (const dir of dirs) {
      let ny = y + dir[0]
      let nx = x + dir[1]
      if (ny < N && ny >= 0 && nx < N && nx >= 0) {
        if (arr[ny][nx] === 1) {
          q.push([ny, nx])
          cnt++;
          arr[ny][nx] = 0
        }
      }
    }
  }
  blocks.push(cnt)
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) {
      num++
      bfs([i, j], blocks)
    }
  }
}

console.log(num)
blocks.sort((a, b) => a - b)
for (const block of blocks) {
  console.log(block)
}