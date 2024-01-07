const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.map(Number)

// 유클리드 호제법
function GCD(x, y) {
  if (!(x % y)) {
    return y
  }
  return GCD(y, x % y)
}

for (let i = Math.floor(Math.sqrt(b / a)); i > 0; i--) {
  let j = (b / a) / i
  if (GCD(i, j) === 1 && !((b / a) % i)) {
    console.log(i * a, j * a)
    break
  }
}