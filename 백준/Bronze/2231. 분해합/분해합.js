const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input)
let res = num - 9 * input.length

while (res < num) {
  let a = String(res).split('')
  let sum = 0
  a.map((i) => sum += Number(i))
  
  if (res + sum === num) {
    break;
  } else {
    res += 1
  }
}

if (res === num) {
  res = 0
}

console.log(res)