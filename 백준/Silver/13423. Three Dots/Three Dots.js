const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift())

let ans = []
let t, mid, left, right, cnt

// binarySearch
// 이분탐색을 통해 배열에서 타겟 값을 찾아요
function check(s, e, target, dots) {
  left = s
  right = e
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (dots[mid] > target) right = mid - 1
    if (dots[mid] < target) left = mid + 1
    if (dots[mid] === target) return 1
  }
  return 0
}

for (let t = 0; t < T; t++) {
  cnt = 0
  const N = input[2 * t]
  const dots = input[2 * t + 1].split(' ').map(Number).sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    for (let j = i + 2; j < N; j++) {
      curr = (dots[i] + dots[j]) / 2
      if (curr % 1 !== 0) continue
      cnt += check(i, j, curr, dots)
    }
  }
  ans.push(cnt)
}
console.log(ans.join('\n'))