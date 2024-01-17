const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const nums = input[0].split(' ')
let prefix = Array.from({length: N + 1}, () => 0)
for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + Number(nums[i - 1])
}

let cnt = 0
let left = 0
let right = 1
while (right <= N && left <= N) {
  if (prefix[right] - prefix[left] === M) {
    cnt++;
    right++;
  } else if (prefix[right] - prefix[left] > M) left++;
  else if (prefix[right] - prefix[left] < M) right++;
}
console.log(cnt)