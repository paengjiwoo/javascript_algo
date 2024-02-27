const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 방의 크기 : N x M
const [N, M] = input.shift().split(' ').map(x => +x)
let [r, c, d] = input.shift().split(' ').map(x => +x)
let room = input.map(a => a.split(' ').map(x => +x))
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
// 북, 동, 남, 서
let ans = 0
// 청소기의 청소 횟수

function checkd() {
  d--;
  if (d < 0) d = 3
}

function work() {
  while (true) {
    // 현재 칸이 아직 청소되지 않은 경우, 현재 칸 청소
    if (!room[r][c]) {
      room[r][c] = 2
      ans++;
    }
    
    let flag = false
    for (const dir of dirs) {
      // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸 있는지 확인
      if (r + dir[0] >= 0 && r + dir[0] < N && c + dir[1] >= 0 && c + dir[1] < M) {
        if (!room[r + dir[0]][c + dir[1]]) flag = true
      }
    }
    // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸 있는 경우
    if (flag) {
      checkd()
      while (r + dirs[d][0] < 0 || r + dirs[d][0] >= N || c + dirs[d][1] < 0 || c + dirs[d][1] >= M || room[r + dirs[d][0]][c + dirs[d][1]]) {
        checkd()
      }
      r += dirs[d][0]
      c += dirs[d][1]
    } else {
      let ny = dirs[d][0]
      let nx = dirs[d][1]
      // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸 없는 경우
      if (r - ny >= 0 && r - ny < N && c - nx >= 0 && c - nx < M && room[r - ny][c - nx] !== 1) {
        r -= ny
        c -= nx
      } else return
    }
  }
}

work()
console.log(ans)