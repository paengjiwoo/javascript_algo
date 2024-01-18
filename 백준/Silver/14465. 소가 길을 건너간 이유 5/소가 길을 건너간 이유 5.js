const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K, B] = input.shift().split(' ').map(Number)

let arr = Array.from({length: N + 1}, () => 0)
for (let i = 0; i < B; i++) arr[Number(input[i])] = 1

if (K === 1) {
  console.log(arr[1])
} else {
  let cnt = arr.slice(1, K).reduce((acc, curr) => {
    return acc + curr
  }, 0)
  let ans = Infinity
  for (let i = 0; i <= N - K; i++) {
    cnt = cnt - arr[i] + arr[i + K]
    if (ans > cnt) ans = cnt
  }
  console.log(ans)
}