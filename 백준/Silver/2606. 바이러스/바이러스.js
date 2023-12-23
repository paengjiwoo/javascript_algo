const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const M = parseInt(input[1])

let graph = Array.from({length:N+1}, () => [])
for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

let visited = Array.from({length:N + 1}, () => false)
let ans = 0

function bfs(n) {
  let q = [n]
  visited[n] = true
  while (q.length) {
    let node = q.shift()
    for (let i = 1; i <= N; i++) {
      if(!visited[i] && graph[node].includes(i)) {
        visited[i] = true;
        ans++;
        q.push(i)
      }
    }
  }
}

bfs(1)
console.log(ans)