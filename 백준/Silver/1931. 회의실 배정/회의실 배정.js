const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
let meetings = []
for (let i = 1; i < N + 1; i++) {
  const [s, e] = input[i].split(' ')
  meetings.push([parseInt(s), parseInt(e)])
}
// 회의가 시작하자마자 끝나는 경우 고려한 sort
meetings.sort((a, b) => a[1]===b[1] ? a[0] - b[0] : a[1] - b[1])
let start = 0
let cnt = 0
for (let j = 0; j < N; j++) {
  if (start <= meetings[j][0]) {
    start = meetings[j][1]
    cnt += 1
  }
}
console.log(cnt)