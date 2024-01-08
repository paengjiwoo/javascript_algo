const [N, A] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function check(n, a) {
  let cnt = Math.floor(n / a)
  let num = cnt
  while (num >= a) {
    num = Math.floor(num / a)
    cnt += num
  }
  return cnt;
}

console.log(check(N, A))