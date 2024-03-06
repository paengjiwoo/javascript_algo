const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift())
// 방문 확인 배열
const visited = Array.from({length: n + 1}, () => 0)
// 연결된 노드 정보 배열
const nodes = Array.from({length: n + 1}, () => [])
const [a, b] = input.shift().split(' ').map(x => +x)
const m = Number(input.shift())
for (let i = 0; i < m; i++) {
  const [x, y] = input[i].split(' ').map(x => +x)
  nodes[x].push(y)
  nodes[y].push(x)
}
let ans = -1
function dfs(n, cnt) {
  if (ans > 0) return
  // 해당하는 최소 촌수를 찾으면 return
  if (n === b) {
    ans = cnt
    return
  }
  for (let i = 0; i < nodes[n].length; i++) {
    if (!visited[nodes[n][i]]) {
      visited[nodes[n][i]] = 1
      dfs(nodes[n][i], cnt + 1)
    }
  } 
}
visited[a] = 1
dfs(a, 0)
console.log(ans)