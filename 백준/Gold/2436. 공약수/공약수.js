const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.map(Number)

function GCD(x, y, res) {
  while (y > 0) {
    res = x % y 
    x = y
    y = res
  }
  return x
}

for (let i = Math.floor(Math.sqrt(b / a)); i > 0; i--) {
  if (((b / a) % i)) continue
  const j = (b / a) / i
  if (i > j) break
  let res = 0
  if (GCD(i, j, res) === 1) {
    console.log(i * a, j * a)
    break
  }
}