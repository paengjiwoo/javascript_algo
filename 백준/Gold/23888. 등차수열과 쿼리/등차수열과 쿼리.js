const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, d] = input[0].split(' ').map(Number)
const T = parseInt(input[1])

for (let t = 2; t < T + 2; t++) {
  const [type, s, e] = input[t].split(' ').map(Number)
  if (type === 1) {
    console.log((e - s + 1) * (a + d * ((s + e) / 2 - 1)))
  } else {
    if (s === e) {
      console.log(a + d * (s - 1))
    } else {
      // 초항과 공차의 최대공약수
      if (!d) {
        console.log(a)
      } else {
        let num = Math.max(a, d)
        let division = Math.min(a, d)
        while (true) {
          const remain = num % division
          if (!remain) break
          num = division
          division = remain
        }
        console.log(division)
      }
    }
  }
}