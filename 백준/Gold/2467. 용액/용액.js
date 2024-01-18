const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const nums = input[0].split(' ').map(Number)
let left = 0
let right = N - 1
let zero = Infinity
let ans = []
while (left < right) {
  const curr = nums[right] + nums[left]
  if (curr === 0) {
    ans = [nums[left], nums[right]] 
    break
  }
  if (zero > Math.abs(curr)) {
    zero = Math.abs(curr)
    ans = [nums[left], nums[right]]
  }
  if (curr < 0) left++;
  if (curr > 0) right--;
}
console.log(ans.join(' '))