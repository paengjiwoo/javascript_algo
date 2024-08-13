const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const string = input[2];

let cnt = 0;
let left = 0;
let right = 0;

let len = 2 * N + 1;

while (right < M) {
  if (string[right] === 'I' && string[right + 1] === 'O' && string[right + 2] === 'I') {
    right += 2;
    if (right - left === 2 * N) {
      cnt++;
      left += 2;
    }
  } else {
    right += 1;
    left = right
  }
}

console.log(cnt);