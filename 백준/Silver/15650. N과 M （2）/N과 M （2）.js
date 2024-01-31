const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number)

let res = []
function permutation(idx, ans, cnt, checked) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }
  
  for (let i = idx; i < N + 1; i++) {
    if (checked[i]) continue
    checked[i] = 1
    ans.push(i)
    cnt++;
    permutation(i, ans, cnt, checked)
    cnt--;
    ans.pop()
    checked[i] = 0
  }
}

let arr = Array.from({length: N + 1}, () => 0)
permutation(1, [], 0, arr)

console.log(res.join('\n'))