const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(x => +x)
const map = input.map(a => a.split('').map(x => +x))

// BFS
function solve() {
  // 지정 도착 지점에 도착할 때 까지 누적 거리 기록
  let visited = Array.from({length: N}, () => Array.from({length: M}, () => 0))
  const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]]
  let q = [[0, 0]]
  visited[0][0] = 1
  while (q.length) {
    let [y, x] = q.shift()
    for (const dir of dirs) {
      let ny = y + dir[0]
      let nx = x + dir[1]
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue
      if (map[ny][nx] && !visited[ny][nx]) {
        // 찾고자 하는 위치에 도착하면 바로 return
        if (ny === N - 1 && nx === M - 1) {
          return visited[y][x] + 1
        }
        visited[ny][nx] = visited[y][x] + 1
        q.push([ny, nx])
      }
    }
  }
}
console.log(solve())