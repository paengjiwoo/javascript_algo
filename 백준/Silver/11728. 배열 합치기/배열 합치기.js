const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)

const A = input[0].split(' ').map(Number)
const B = input[1].split(' ').map(Number)

let a = 0
let b = 0
let ans = []
while (a < N && b < M) {
  if (A[a] <= B[b]) {
    ans.push(A[a])
    a++
  } else {
    ans.push(B[b])
    b++;
  }
}

if (a === N) ans.push(...B.slice(b))
if (b === M) ans.push(...A.slice(a))

console.log(ans.join(' '))