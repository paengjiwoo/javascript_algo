const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const [A, B] = input.shift().split(' ').map(Number)

const dots = input.map(a => a.split(' ').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1])
let ans = 0
let left, right, start, end, mid, lt, rt, rb, res
let lowerBound, upperBound

// 이분탐색
function check(target) {
  // x좌표기준 upperBound
  left = 0
  right = N - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (dots[mid][0] <= target[0]) left = mid + 1
    if (dots[mid][0] > target[0]) right = mid - 1
  }
  if (dots[right][0] !== target[0]) return false
  upperBound = right

  // x좌표기준 lowerBound
  left = 0
  right = N - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (dots[mid][0] < target[0]) left = mid + 1
    if (dots[mid][0] >= target[0]) right = mid - 1
  }
  if (dots[left][0] !== target[0]) return false
  lowerBound = left

  // y좌표 이분 탐색
  start = lowerBound
  end = upperBound
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (dots[mid][1] < target[1]) start = mid + 1
    if (dots[mid][1] > target[1]) end = mid - 1
    if (dots[mid][1] === target[1]) return true
  }
  return false
}

for (let i = 0; i < N; i++) {
  const [a, b] = dots[i]
  lt = [a, b + B]
  rt = [a + A, b + B]
  rb = [a + A, b]
  res = check(lt) ? true : false
  if (res) res = check(rt) ? true : false 
  else continue
  if (res) check(rb) ? ans++ : null
}
console.log(ans)