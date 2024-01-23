const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const str = input[0]

if (str.length === 1) {
  console.log(1)
} else {
  let memo = {}
  for (let i = 0; i < 26; i++) {
    memo[String.fromCharCode(i + 97)] = 0
  }

  let s = 0
  let e = 1
  let cnt = (str[0] === str[1] ? 1 : 2)
  memo[str[0]] += 1
  memo[str[1]] += 1
  let ans = 1
  while (s < str.length - ans && e < str.length - 1) {
    if (cnt <= N) {
      e++;
      if (!memo[str[e]]) cnt++;
      memo[str[e]] += 1
    } else {
      memo[str[s]] -= 1
      if (!memo[str[s]]) cnt--;
      s++;
      if (e - s + 1 < ans) {
        e++;
        if (!memo[str[e]]) cnt++;
        memo[str[e]] += 1
      }
    }
    if (cnt <= N && ans < e - s + 1) ans = e - s + 1
  }
  console.log(ans)
}