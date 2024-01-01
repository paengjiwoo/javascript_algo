const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])

// 에라토스테네스의 체
let arr = Array.from({length: 1000001}, () => 1)
for (let i = 2; i < 1000001; i++) {
  if (!arr[i]) continue
  for (let j = 2 * i; j < 1000001; j += i) {
    if (!arr[j]) continue
    arr[j] = 0
  }
}

for (let p = 1; p <= N; p++) {
  const num = BigInt(input[p])
  let res = true
  for (let c = 2; c < 1000001; c++) {
    if (arr[c] && num % BigInt(c) === 0n) {
      res = false
      break
    }
  }
  console.log(res ? 'YES' : 'NO')
}