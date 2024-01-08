const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = parseInt(input)
console.log(Math.floor(Math.sqrt(N)))