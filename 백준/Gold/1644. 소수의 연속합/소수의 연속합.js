const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = parseInt(input)

if (N === 1) {
  console.log(0)
} else {
  // 에라토스테네스의 체
  let arr = Array.from({length: N + 1}, () => 0)
  let prime = []
  for (let i = 2; i < N + 1; i++) {
    if (arr[i]) continue
    prime.push(i)
    for (let j = i * 2; j < N + 1; j += i) {
      arr[j] = 1
    }
  }

  let ans = 0
  let s = 0
  let e = 0
  let sum = 2
  while (s < prime.length && e < prime.length) {
    if (sum >= N) {
      if (sum === N) {
        ans++;
      }
      sum -= prime[s]
      s++;
    } else {
      e++;
      sum += prime[e]
    }
  }
  console.log(ans)
}

