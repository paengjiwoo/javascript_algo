const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number)

const nums = input[0].split(' ').map(Number)
let prefix = Array.from({length: N + 1}, () => 0)
let map = new Map()
let ans = 0;
for (let i = 0; i < N; i++) {
  prefix[i + 1] = prefix[i] + nums[i]
  if (prefix[i + 1]===K) ans++
  if (map.has(prefix[i + 1] - K)) ans += map.get(prefix[i + 1] - K)
  map.set(prefix[i + 1], map.has(prefix[i + 1]) ? map.get(prefix[i + 1]) + 1 : 1)
}
console.log(ans)