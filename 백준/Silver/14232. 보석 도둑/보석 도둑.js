const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0])
let weight = 2
let jewel = []

while (N > 1 && weight <= Math.sqrt(N) + 1) {
  while (!(N % weight)) {
    N = N / weight
    jewel.push(weight)
  }
  weight++;
}
if (N !== 1) jewel.push(N)

console.log(jewel.length)
console.log(jewel.join(' '))