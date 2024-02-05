const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number)
const map = input.map(a => a.split(' ').map(Number))
let chickens = []
let houses = []
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      houses.push([i, j])
    } else if (map[i][j] === 2) {
      chickens.push([i, j])
    }
  }
}

let sum, min, dis
function check(res) {
  sum = 0
  for (let i = 0; i < houses.length; i++) {
    min = Infinity
    for (let j = 0; j < M; j++) {
      dis = Math.abs(houses[i][0] - res[j][0]) + Math.abs(houses[i][1] - res[j][1])
      if (min > dis) min = dis
    }
    sum += min
  }
  return sum
}

let curr
let ans = Infinity
function selectChicken(idx, cnt, res) {
  if (cnt === M) {
    curr = check(res)
    if (curr < ans) ans = curr
    return
  }

  for (let i = idx; i < chickens.length; i++) {
    res.push(chickens[i])
    selectChicken(i + 1, cnt + 1, res)
    res.pop()  
  }
}
selectChicken(0, 0, [])
console.log(ans)