// 그리디
const input = require('fs').readFileSync('/dev/stdin').toString();
let n = Number(input)
let count = 0

 while (n >= 0) {
  if (n % 5 == 0) {
    count += n / 5
    console.log(count)
    break
  } else {
    n -= 3
    count += 1
  }
}

if (n < 0) {
  console.log(-1)
}