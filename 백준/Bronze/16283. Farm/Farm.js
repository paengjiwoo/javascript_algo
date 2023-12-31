const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const  [a, b, n, w] = input.map(Number)
let ans = [0, 0]

function check() {
  for (let i = 1; i < n; i++) {
    const total  = a * i + b * (n - i)
    if (total === w) {
      if (!ans[0]) {
        ans[0] = i
        ans[1] = n - i
      } else {
        ans[0] = 0
        ans[1] = 0
        return
      }
    }
  }
}
check()
console.log(!ans[0] ? -1 : ans.join(' '))