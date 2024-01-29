const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// N : 아이들 수, M : 색상의 수
const [N, M] = input.shift().split(' ').map(Number)
let jewels = []
for (let i = 0; i < M; i++) {
  jewels.push(Number(input[i]))
}

let left = 0
let right = Math.max(...jewels)
let total = 0
let mid, ans
while (left <= right) {
  total = 0
  mid = parseInt((left + right) / 2)
  
  for (let i = 0; i < M; i++) total += Math.ceil(jewels[i] / mid)
  if (total > N) left = mid + 1
  else if (total <= N) {
    ans = mid
    right = mid - 1
  }
}
console.log(ans)