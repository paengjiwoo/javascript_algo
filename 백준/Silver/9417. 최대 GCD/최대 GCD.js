const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0])

function GCD(x, y) {
  if (y === 0) {
    return x
  }
  return GCD(y, x % y)
}

function check(arr) {
  let ans = 1
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      ans = Math.max(GCD(arr[i], arr[j]), ans)
    }
  }
  return ans;
}

for (let t = 1; t <= T; t++) {
  const nums = input[t].split(' ').map(Number)
  console.log(check(nums))
}