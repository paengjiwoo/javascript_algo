const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ')
let board = input.slice(1)
for (let b = 0; b < n; b++) {
  board[b] = board[b].split(' ')
}

let total = 0
let max = 0
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const art = (i, j) => {
  let q = [[i , j]]
  let w = 1
  board[i][j] = "0"
  while (q.length > 0) {
    const [y, x] = q.shift()
    for (const dir of dirs) {
      const ny = y + dir[0]
      const nx = x + dir[1]
      if (0 <= ny && ny < n && 0 <= nx && nx < m) {
        if (board[ny][nx] === "1") {
          board[ny][nx] = "0"
          q.push([ny, nx])
          w += 1
        }
      }
    }
  }
  if (w > max) {
    max = w
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "1") {
      total += 1
      art(i, j)
    }
  }
}

console.log(total)
console.log(max)