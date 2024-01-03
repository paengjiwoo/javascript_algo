const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number)
const status = input.slice(1).map(a => a.split(' ').map(Number))
let min = Infinity

// 진수 스탯 픽스
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      let cnt = 0
      let flag = false
      // 각각의 병사들과 비교
      for (let d = 0; d < N; d++) {
        if (status[i][0] >= status[d][0] && status[j][1] >= status[d][1] && status[k][2] >= status[d][2]) {
          cnt++;
        }
        if (cnt === K) {
          flag = true
          break
        }
      }
      if (flag) {
        min = Math.min(min, status[i][0] + status[j][1] + status[k][2])
      }
    }
  }
}
console.log(min)