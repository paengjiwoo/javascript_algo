const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B] = input.map(a => BigInt(a))

function justTwo(num) {
  if (num === 0n) {
    return 0n
  } else if (num === 1n) {
    return 1n
  } else if (!(num % 2n)) {
    return num / 2n + 2n * justTwo(num / 2n)
  } else if (num % 2n) {
    return num / 2n + 1n + 2n * justTwo(num / 2n)
  }
}
console.log((justTwo(B) - justTwo(A - 1n)).toString())