const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const diff = Number(input.shift());
const meow = input[0];

let left = 0;
let right = 0;
let ans = 0;

// 알파벳 소문자의 아스키 코드는 97에서 123, 총 26개 알파벳
let alphabet = new Array(26).fill(0);
let cnt = 0;

while (right < meow.length) {
  let rightMeow = meow[right].codePointAt();
  if (!alphabet[rightMeow - 97]) {
    cnt++;
  };
  alphabet[rightMeow - 97]++;
  right++;

 
  while (diff < cnt && left < right) {
    let leftMeow = meow[left].codePointAt();
    alphabet[leftMeow - 97]--;
    left++;

    if (!alphabet[leftMeow - 97]) {
      cnt--;
    }
  }

  ans = Math.max(ans, right - left);
}

console.log(ans);