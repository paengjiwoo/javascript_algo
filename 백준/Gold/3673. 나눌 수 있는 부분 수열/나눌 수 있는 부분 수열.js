const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const C = parseInt(input.shift())

let res = []
for (let c = 0; c < C; c++) {
  const [d, n] = input[2 * c].split(' ').map(Number)
  const nums = input[2 * c + 1].split(' ').map(Number)
  let map = new Map()
  let prefix = Array.from({length: n + 1}, () => 0)
  let ans = 0
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
    if (!(prefix[i + 1] % d)) ans++;
    if (map.has(prefix[i + 1] % d)) {
      ans += map.get(prefix[i + 1] % d)
    }
    map.set(prefix[i + 1] % d, map.has(prefix[i + 1] % d) ? map.get(prefix[i + 1] % d) + 1 : 1)
  }
  res.push(ans)
}
console.log(res.join('\n'))