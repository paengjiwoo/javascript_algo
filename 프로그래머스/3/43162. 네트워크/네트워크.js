// dfs
function solution(n, computers) {
  let cnt = 0
  var visited = Array.from({length: n}, () => 0)
  
  function dfs(i) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) {
        visited[j] = 1
        dfs(j)
      }
    }
  }
    
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      cnt++
    }
  }
  return cnt;
}