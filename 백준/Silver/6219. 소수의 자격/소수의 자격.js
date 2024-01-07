const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B, D] = input.map(Number)

let arr = Array.from({length: B + 1}, () => 1)
for (let i = 2; i <= B; i++) {
  if (!arr[i]) continue
  for (let j = 2 * i; j <= B; j += i) {
    if (!arr[j]) continue
    arr[j] = 0
  }
}
let cnt = 0
for (let i = A; i <= B; i++) {
  if (!arr[i]) continue
  if (i.toString().split('').includes(D.toString())) {
    cnt++;
  }
}

console.log(cnt)