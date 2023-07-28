const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let ansArray = []
for (let i=0; i < input.length; i++) {
  if (!Number(input[i])) {
    ansArray.pop()
  } else {
    ansArray.push(Number(input[i]))
  }
}

let ans = 0
ansArray.forEach((num) => {
  ans += num
})

console.log(ans)