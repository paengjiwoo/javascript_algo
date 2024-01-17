const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift())

if (n === 1) {
  console.log(0)
} else {
  const nums = input.shift().split(' ').map(Number).sort((a, b) => a - b)
  const x = Number(input[0])
  let cnt = 0
  let l = 0
  let r = n - 1
  while (l < r) {
    if (nums[l] + nums[r] === x) {
      cnt++;
      r--;
    } else if (nums[l] + nums[r] > x) r--;
    else if (nums[l] + nums[r] < x) l++;
  }
  console.log(cnt)
}