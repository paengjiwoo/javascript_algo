const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B] = input.map(Number)
console.log(A + B)