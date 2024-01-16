const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const Aarr = input[0].split(' ')
const Barr = input[1].split(' ')

let memo = new Map()
let prefix = Array.from({length: N + 1}, () => 0)
let ans = 0
for (let i = 0; i < N; i++) {
  prefix[i + 1] = prefix[i] + (Aarr[i] - Barr[i])
  const curr = prefix[i + 1]
  if (!curr) ans++;
  if (memo.has(curr)) ans += memo.get(curr)
  memo.set(curr, memo.has(curr) ? memo.get(curr) + 1 : 1)
}
console.log(ans)