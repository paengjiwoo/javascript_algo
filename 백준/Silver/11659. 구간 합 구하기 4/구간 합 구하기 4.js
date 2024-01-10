const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number)
const nums = input[1].split(' ').map(Number)

let arr = Array.from({length: N + 1}, () => 0)
for (let i = 0; i < N; i++) {
  arr[i + 1] = arr[i] + nums[i]
}

let ans = []
for (let j = 0; j < M; j++) {
  const [s, e] = input[j + 2].split(' ').map(Number)
  ans.push(arr[e] - arr[s - 1])
}

console.log(ans.join('\n'))