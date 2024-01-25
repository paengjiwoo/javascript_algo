const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const cards = input[1].split(' ').map(Number).sort((a, b) => a- b)
const M = Number(input[2])
const nums = input[3].split(' ').map(Number)
let ans = []

for (let i = 0; i < M; i++) {
  const target = nums[i]
  let s = 0
  let e = N - 1
  let mid
  
  let lowerBound, upperBound
  while (s <= e) {
    mid = Math.floor((s + e) / 2)
    if (cards[mid] >= target) e = mid - 1
    if (cards[mid] < target) s = mid + 1
  }
  lowerBound = s < N && cards[s] === target ? s : -1
  s = 0
  e = N - 1
  while (s <= e) {
    mid = Math.floor((s + e) / 2)
    if (cards[mid] <= target) s = mid + 1
    if (cards[mid] > target) e = mid - 1
  }
  upperBound = e >= 0 && cards[e] === target ? e : -1
  ans.push(lowerBound === -1 ? 0 : upperBound - lowerBound + 1)
}
console.log(ans.join(' '))
