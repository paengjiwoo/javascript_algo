const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, k] = input.shift().split(' ').map(x => +x)
const costs = input.shift().split(' ').map(x => +x)
costs.unshift(0)
const relations = Array.from({length: N + 1}, () => [])

// 친구 관계를 연결리스트로 저장합니다
for (let i = 0; i < M; i++) {
  const [v, w] = input.shift().split(' ').map(x => +x)
  relations[w].push(v)
  relations[v].push(w)
}

let total = 0
let visited = Array.from({length: N + 1}, () => 0)

// dfs(너비 우선 탐색)를 활용해
// 관계가 이어진 친구 중 가장 적은 친구비를 가진 경우를 탐색합니다
function dfs(n) {
  const next = relations[n]
  for (let i = 0; i < next.length; i++) {
    if (!visited[next[i]]) {
      visited[next[i]] = 1
      if (costs[next[i]] < min) min = costs[next[i]]
      dfs(next[i])
    }
  }
}

// 모든 학생을 친구로 만들때, 최소 친구비 합을 탐색합니다
// 매번 관계가 있는 친구 중 가장 적은 친구비를 가진 친구와 사귀고
// 이 경우의 친구비를 모두 더하면 친구비 합의 최솟값을 구할 수 있습니다
for (let i = 1; i < N + 1; i++) {
  // dfs의 과정에서 이미 탐색된 친구는 추가적인 탐색을 시행하지 않습니다
  if (!visited[i]) {
    visited[i] = 1
    // 준석이는 모든 학생을 친구로 만드는 것이 목표이므로
    // 다른 친구와 관계를 가지지 않은 친구의 친구비는 바로 더합니다
    if (!relations[i].length) {
      total += costs[i]
      continue
    }
    // 다른 친구 관계를 가진 친구의 경우
    // 이어진 친구 관계에서 가장 적은 친구비를 가진 한명의 경우를 찾습니다
    
    var min = costs[i]
    dfs(i, [costs[i]])
    total += min
  }
  // 만약 모든 친구와 친해지기 위한 비용의 합이 준석이의 예산을 초과할 경우
  // 친구비 합 탐색을 멈추고 출력 시행으로 이동합니다.
  if (total > k) break
}

// 만약 도출된 친구비 합이 준석이의 예산을 초과한다면 
// 모든 학생을 친구로 만들 수 없었으므로 "Oh no"를 출력합니다

// 준석이의 예산 안에서 모든 학생을 친구로 만드는 친구비가 산정될 경우
// 위의 탐색을 통해 구한 친구비 최소합을 출력합니다
console.log(total > k ? "Oh no" : total)