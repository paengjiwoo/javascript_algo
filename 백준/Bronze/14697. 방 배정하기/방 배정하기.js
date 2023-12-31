const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B, C, total] = input.map(Number)

function assign() {
  for (let i = 0; i <= Math.floor(total / C); i++) {
    for (let j = 0; j <= Math.floor((total - C * i) / B); j++) {
      if ((total - C * i - B * j) % A === 0) {
        return 1
      }
    }
  }
  return 0
}
console.log(assign())