const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b, c, d, e, f] = input.map(Number)

function equations() {
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        return [i, j].join(' ')
      }
    }
  }
}
console.log(equations())