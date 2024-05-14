const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const people = input[0].split(' ').map(a => Number(a))
people.sort((a, b) => a - b)
let res = 0
for (let i = 1; i < N; i++) {
  res += people[i - 1]
  people[i] += people[i - 1]
}
console.log(res + people[N - 1])