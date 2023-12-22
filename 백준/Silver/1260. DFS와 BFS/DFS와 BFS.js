const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number)

let visitedDfs = Array.from({length:N + 1}, () => false)
let visitedBfs = Array.from({length:N + 1}, () => false)

let graph = Array.from({length:N + 1}, () => Array.from({length:N + 1}, () => false))
for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  graph[a][b] = true
  graph[b][a] = true
}

let ansDfs = []
let ansBfs = []

function dfs(s) {
  visitedDfs[s] = true
  ansDfs.push(s)
  for (let i = 1; i < N + 1; i++) {
    if (!visitedDfs[i] && graph[s][i]) {
      dfs(i)
    }
  }
}

function bfs(s) {
  queue = [s]
  visitedBfs[s] = true
  while (queue.length) {
    const n = queue.shift()
    ansBfs.push(n)
    for (let i = 1; i < N + 1; i++) {
      if (!visitedBfs[i] && graph[n][i]) {
        queue.push(i)
        visitedBfs[i] = true
      }
    }
  }
}

dfs(V)
console.log(ansDfs.join(' '))
bfs(V)
console.log(ansBfs.join(' '))