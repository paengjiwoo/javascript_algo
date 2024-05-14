const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const people = input[0].split(' ').map(a => Number(a))
people.sort((a, b) => a - b)
for (let i = 1; i < N; i++) {
  people[i] += people[i - 1]
}
console.log(people.reduce((acc, curr) => { return acc + curr }, 0))