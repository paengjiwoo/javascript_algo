const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [L, C] = input.shift().split(' ').map(Number)
const alphabet = input[0].split(' ').sort()

let ans = []
function solve(str, cnt, idx) {
  if (str.length === L) {
    if (cnt >= 1 && str.length - cnt >= 2) {
      ans.push(str)
    }
    return
  }
  
  for (let i = idx; i < C; i++) {
    if (alphabet[i] === 'a' || alphabet[i] === 'e' || alphabet[i] === 'i' || alphabet[i] === 'o' || alphabet[i] === 'u') {
      solve(str + alphabet[i], cnt + 1, i + 1)
    } else { solve(str + alphabet[i], cnt, i + 1) }
  }
}
solve('', 0, 0)
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i])
}