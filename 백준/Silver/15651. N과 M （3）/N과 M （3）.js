const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number)

let res = []
function permutation(ans, cnt) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }
  
  for (let i = 1; i < N + 1; i++) {
    ans.push(i)
    cnt++;
    permutation(ans, cnt)
    cnt--;
    ans.pop()
  }
}

permutation([], 0)
console.log(res.join('\n'))