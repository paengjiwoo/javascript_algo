const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0])
const time = Array.from({length: 1001}, () => 0)

for (let i = 1; i <= N; i++) {
  const [s, e] = input[i].split(' ').map(Number)
  for (let j = s; j < e; j++) {
    time[j]++;
  }
}

let ans = 0
for (let i = 1; i <= N; i++) {
  const [s, e] = input[i].split(' ').map(Number)
  for (let j = s; j < e; j++) {
    time[j]--;
  }
  let count = 0
  for (const point of time) {
    if (point > 0) count++
  }
  ans = Math.max(count, ans)
  for (let j = s; j < e; j++) {
    time[j]++;
  }
}
console.log(ans)