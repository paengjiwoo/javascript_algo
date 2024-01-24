const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)

let nodes = Array.from({length: 1001}, () => [])
for (const num of input) {
  const [u, v] = num.split(' ').map(Number)
  nodes[u].push(v)
  nodes[v].push(u)
}

function check(s, visited) {
  visited[s] = 1
  for (const node of nodes[s]) {
    if (!visited[node]) {
      check(node, visited)
    }
  }
}
let visited = Array.from({length: 1001}, () => 0)
let cnt = 0
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    check(i, visited)
    cnt++;
  }
}
console.log(cnt)