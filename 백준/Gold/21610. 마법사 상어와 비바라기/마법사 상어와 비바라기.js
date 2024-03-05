const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(x => +x)
let baskets = input.slice(0, N).map(s => s.split(' ').map(x => +x))
baskets.unshift(Array.from({length: N}, () => 0))
baskets.map(a => a.unshift(0))
const movements = input.slice(N, N + M).map(s => s.split(' ').map(x => +x))
// 방향 : ←, ↖, ↑, ↗, →, ↘, ↓, ↙
const dirs = [0, [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
// 처음 생성되는 clouds 위치 포함 배열 생성
let clouds = [[N, 1], [N, 2], [N - 1, 1], [N - 1, 2]]
let ans = 0

function count() {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) ans += baskets[i][j]
  }
  return ans;
}

function move(n, d, s, str) {
  s = s % N
  if (str === 'y') {
    n += dirs[d][0] * s
  } else { n += dirs[d][1] * s }
  if (n < 1) return N + n
  if (n > N) return n - N
  return n
}

function solve() {
  for (let i = 0; i < M; i++) {
    const [d, s] = movements[i]
    let visited = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 0))
    // 생성된 구름이 d 방향으로 s칸 이동 && 구름에서 비내려 각 칸 바구니에 물의 양 1 증가
    let len = clouds.length
    for (let c = 0; c < len; c++) {
      let [y, x] = clouds.shift()
      y = move(y, d, s, 'y')
      x = move(x, d, s, 'x')

      // 구름이 있는 칸의 바구니 저장된 물의 양 1증가
      baskets[y][x]++;
      // 이동한 뒤 위치 저장
      clouds.push([y, x])
    }

    // 각 구름에서 비내려 물의 양 1씩 모두 증가한 후,
    // 비내린 구름 있는 위치에서 물복사 버그 시행
    // 물복사 버그는 물이 있는 바구니를 검사하므로 반드시 비 1 내리는 시행 이후 발생
    for (let c = 0; c < len; c++) {
      let [y, x] = clouds.shift()
      let cnt = 0
      // 대각선 방향에 물담긴 바구니 양 만큼 현재 위치 바구니 물의양 증가
      for (let d = 1; d <= 4; d++) {
        let dir = dirs[2 * d]
        if (y + dir[0] < 1 || y + dir[0] > N || x + dir[1] < 1 || x + dir[1] > N) continue
        if (baskets[y + dir[0]][x + dir[1]]) cnt++
      }
      baskets[y][x] += cnt
      // 구름이 사라진 칸 기록
      visited[y][x] = 1
    }
    
    // 바구니 물의 양이 2 이상인 구름으로 새로운 구름 배열 만들기
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (baskets[i][j] >= 2 && !visited[i][j]) {
          clouds.push([i, j])
          baskets[i][j] -= 2
        }
      }
    }
  }
  return count()
}

solve()
console.log(ans)