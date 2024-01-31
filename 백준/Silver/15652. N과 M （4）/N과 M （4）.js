const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number)

let res = []
function permutation(idx, ans, cnt) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }
  
  for (let i = idx; i < N + 1; i++) {
    ans.push(i)
    cnt++;
    permutation(i, ans, cnt)
    cnt--;
    ans.pop()
  }
}

permutation(1, [], 0)
console.log(res.join('\n'))