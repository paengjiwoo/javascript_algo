const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.map(Number)

function GCD(x, y) {
  if (!(x % y)) {
    return y
  }
  return GCD(y, x % y)
}

for (let i = Math.floor(Math.sqrt(b / a)); i > 0; i--) {
  if (((b / a) % i)) continue
  const j = (b / a) / i
  if (i > j) break
  if (GCD(i, j) === 1) {
    console.log(i * a, j * a)
    break
  }
}