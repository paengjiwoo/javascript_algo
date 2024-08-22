const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const stack = [];
const str = input[0];
const bomb = input[1];
const len = bomb.length;

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (bomb[len - 1] === str[i]) {
    const sub = stack.slice(-len);
    if (sub.join('') === bomb) stack.splice(-len);
  }
}
console.log(stack.length ? stack.join('') : 'FRULA');