const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number)
let cnt = 0
let ans = ''
function solve(nums, sum) {
  if (sum > n || ans.length > 0) return
  if (sum === n) {
    cnt++;
    if (cnt === k) {
      ans = nums.join('+')
    }
    return
  }

  for (let i = 1; i < 4; i++) {
    nums.push(i)
    solve(nums, sum + i)
    nums.pop()
  }
}
solve([], 0)
console.log(ans.length > 0 ? ans : -1)