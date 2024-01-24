const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b)
const M = Number(input[2])
const check = input[3].split(' ').map(Number)

let ans = []
for (let i = 0; i < M; i++) {
  const target = check[i]
  let s = 0
  let e = N - 1
  let res = 0
  while (s <= e) {
    let mid = Math.floor((s + e) / 2)
    if (cards[mid] > target) e = mid - 1
    if (cards[mid] < target) s = mid + 1
    if (cards[mid] === target) {
      res = 1
      break
    }
  }
  ans.push(res)
}
console.log(ans.join(' '))