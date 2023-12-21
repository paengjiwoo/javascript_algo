const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0])
let length = Math.sqrt(N) + 1
const arr = []

for (let i = 2; i <= length; i++) {
  while (N % i === 0) {
    arr.push(i)
    N = N / i
  }
}
if (N !== 1) arr.push(N)

console.log(arr.length)
console.log(arr.join(' '))