const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.shift())

let prime = Array.from({length:1001}, () => 1)
prime[1] = 0
for (let i = 2; i < 1001; i++) {
  if (!prime[i]) continue
  for (let j = 2 * i; j < 1001; j += i) prime[j] = 0
}

const nums = input[0].split(' ').map(Number)
let ans = 0
for (let i = 0; i < N; i++) {
  if (prime[nums[i]]) ans++;
}
console.log(ans)