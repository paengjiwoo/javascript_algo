const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift())
const nums = input[0].split(' ').map(Number)

let dp = Array.from({length: N}, () => 1)
let seq = Array.from({length: N}, (_, i) => [])
seq[0].push(nums[0])

let idx = 0
let max = 1
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      if (dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1
        seq[i] = [...seq[j], nums[i]]
      }
    }
  }
  if (max < dp[i]) {
    max = dp[i]
    idx = i
  }
  if (!seq[i].length) seq[i] = [nums[i]]
}

console.log(max)
console.log(seq[idx].join(' '))