const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function factorial(int, f) {
  let cnt = Math.floor(int / f)
  let num = cnt
  while (num >= f) {
    num = Math.floor(num / f)
    cnt += num
  }
  return cnt;
}

function check() {
  const two = factorial(N, 2) - factorial(M, 2) - factorial(N - M, 2)
  const five = factorial(N, 5) - factorial(M, 5) - factorial(N - M, 5)
  return Math.min(two, five)
}

console.log(check())