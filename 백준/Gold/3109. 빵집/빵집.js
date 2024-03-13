const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input.shift().split(' ').map(x => +x)
const dir = [[-1, 1], [0, 1], [1, 1]]
let visited = Array.from({length: R + 1}, () => Array.from({length: C + 1}, () => 0))
let cnt = 0

// dfs로 가스관과 빵집 연결하는 경로 탐색
// dir을 오른쪽 위, 오른쪽 방향, 오른쪽 아래 순서로 두어
// 가장 위에서 가능한 경로부터 차례대로 탐색합니다
function dfs(y, x) {
  for (let d = 0; d < 3; d++) {
    const ny = y + dir[d][0]
    const nx = x + dir[d][1]
    if (ny >= 0 && ny < R && nx >= 0 && nx < C) {
      if (!visited[ny][nx] && input[ny][nx] === ".") {
        // 이미 방문한 경로 표시
        visited[ny][nx] = 1
        // 빵집에 도착 가능하면 true 리턴
        if (nx === C - 1) return true;
        // 해당 시행에서 빵집에 도착하는 방법이 확인되면 true 리턴으로 종료
        if (dfs(ny, nx)) return true;
      }
    }
  }  
  // 탐색 결과 빵집에 도달하지 못하면 false 리턴
  return false;
}

for (let i = 0; i < R; i++) {
  // dfs 함수에서 true가 리턴되면 가스관과 빵집 연결이 가능하므로 카운트
  if (dfs(i, 0)) cnt++
}
console.log(cnt)
