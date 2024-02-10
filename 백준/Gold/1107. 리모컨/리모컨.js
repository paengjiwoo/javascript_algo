const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 목표 채널
const N = Number(input.shift())
// 고장난 버튼의 개수
const M = Number(input.shift())

let buttons = Array.from({length: 10}, (_, i) => i)
if (M) 
  buttons = buttons.filter(btn => !(input[0].split(' ').map(Number).includes(btn)))
let ans = Math.abs(100 - N)

let temp
function solve(channel) {
  for (const button of buttons) {
    temp = channel + button.toString()
    ans = Math.min(ans, Math.abs(N - Number(temp)) + temp.length)
    if (temp.length < 6) 
      solve(temp)
  }
}

if (!ans) {
  console.log(0)
} else {
  if (M < 10) {
    solve('')
  }
  console.log(ans)
}