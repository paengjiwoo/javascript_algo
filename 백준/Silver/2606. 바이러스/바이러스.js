const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const M = parseInt(input[1])

let graph = Array.from({length:N+1}, () => Array.from({length:N+1}, () => false))
for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  graph[a][b] = true
  graph[b][a] = true
}

let visited = Array.from({length:N+1}, () => false)
let ans = 0
function dfs(n) {
  visited[n] = true
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && graph[n][i]) {
      ans++;
      dfs(i)
    }
  }
}

dfs(1)
console.log(ans)