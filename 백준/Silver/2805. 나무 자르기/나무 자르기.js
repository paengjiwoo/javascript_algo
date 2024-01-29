const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
let trees = input[0].split(' ').map(Number)

// binary search
let ans = 0
let mid, total
let left = 0
let right = Math.max(...trees)
while (left <= right) {
  total = 0
  mid = Math.floor((left + right) / 2)
  for (const tree of trees) {
    if (tree > mid) total += tree - mid 
  }

  if (total < M) right = mid - 1
  if (total >= M) {
    ans = mid
    left = mid + 1
  }
}
console.log(ans)