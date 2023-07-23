const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

let ans = ''
for (let i = 0; i < 15; i++) {
  input.forEach((string) => { 
    if (string[i]) {
      ans += string[i]
    }}
  )}
console.log(ans)