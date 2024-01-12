const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [H, W] = input.shift().split(' ').map(Number)
const blocks = input[0].split(' ').map(Number)

let memo = [0]
let ans = 0
let bottom = 0
for (let i = 1; i < W; i++) {
  while (memo.length > 0 && blocks[memo[memo.length - 1]] < blocks[i]) {
    bottom = memo.pop()
    
    if (memo.length > 0) {
      let h = Math.min(blocks[i], blocks[memo[memo.length - 1]]) - blocks[bottom]
      let w = i - memo[memo.length - 1] - 1
      ans += h * w
    }
  }
  memo.push(i)
}
console.log(ans)