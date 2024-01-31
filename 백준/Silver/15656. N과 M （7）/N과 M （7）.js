const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const nums = input[0].split(' ').map(Number).sort((a, b) => a - b)

let res = []
function permutation(ans, cnt) {
  if (cnt === M) {
    res.push(ans.join(' '))
    return
  }
  
  for (let i = 0; i < N; i++) {
    ans.push(nums[i])
    cnt++;
    permutation(ans, cnt)
    cnt--;
    ans.pop()
  }
}

permutation([], 0,)
console.log(res.join('\n'))