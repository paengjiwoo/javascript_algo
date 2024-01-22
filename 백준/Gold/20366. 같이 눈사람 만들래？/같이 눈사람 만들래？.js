const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.shift())
const snowballs = input[0].split(' ').map(Number).sort((a, b) => a - b)

let ans = Infinity
for (let i = 0; i < N - 3; i++) {
  for (let j = i + 3; j < N; j++) {
    const Anna = snowballs[i] + snowballs[j]
    let left = i + 1
    let right = j - 1
    
    while (left < right) {
      const Elsa = snowballs[left] + snowballs[right]
      if (ans > Math.abs(Elsa - Anna)) ans = Math.abs(Elsa - Anna)
      if (Elsa > Anna) {
        right--;
      } else if (Elsa < Anna) {
        left++
      } else if (Elsa === Anna) {
        ans = 0
        break
      }
    }
  }
}
console.log(ans)