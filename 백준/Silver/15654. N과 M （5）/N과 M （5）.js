const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const nums = input[0].split(' ').map(Number).sort((a, b) => a - b)

let res = []
function permutation(ans, cnt, checked) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }
  
  for (let i = 0; i < N; i++) {
    if (checked[i]) continue
    ans.push(nums[i])
    cnt++;
    checked[i] = 1
    permutation(ans, cnt, checked)
    checked[i] = 0
    cnt--;
    ans.pop()
  }
}

let checked = new Array(N)
permutation([], 0, checked)
console.log(res.join('\n'))