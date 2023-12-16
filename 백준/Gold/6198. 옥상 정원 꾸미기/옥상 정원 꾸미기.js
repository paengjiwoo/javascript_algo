const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let ans = 0
let stack = []
for (let i = 1; i < input.length; i++) {
  while (stack.length && stack[stack.length - 1] <= input[i]) {
    stack.pop()
  }
  stack.push(input[i])
  ans += stack.length - 1
}
console.log(ans)