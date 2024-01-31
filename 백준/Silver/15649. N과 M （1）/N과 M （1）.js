const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number)

let res = []
function permutation(ans, cnt, checked) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }

  for (let i = 1; i < N + 1; i++) {
    if (checked[i]) continue
    checked[i] = 1
    ans.push(i)
    cnt++;
    permutation(ans, cnt, checked)
    cnt--;
    ans.pop()
    checked[i] = 0
  }
}

let checked = Array.from({length: N + 1}, () => 0)
permutation([], 0, checked)

console.log(res.join('\n'))