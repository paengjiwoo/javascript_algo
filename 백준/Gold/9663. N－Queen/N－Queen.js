const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = Number(input)

function check(curr, arr) {
  k = 0
  flag = true
  while (k < curr && flag) {
    if (arr[curr] === arr[k] || Math.abs(arr[curr] - arr[k]) === curr - k) {
      flag = false
    }
    k++
  }
  return flag
}

let cnt = 0
let col = Array.from({length: N}, () => 0)
function solve(curr, arr) {
  if (curr === N) {
    cnt++
    return 
  } 
  for (let i = 0; i < N; i++) {
    arr[curr] = i
    if (!check(curr, arr)) continue
    solve(curr + 1, arr)
  }
}
solve(0, col)
console.log(cnt)