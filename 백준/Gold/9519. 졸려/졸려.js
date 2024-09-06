const filePath = process.platform === "linux" ? "/dev/stdin" : "./input/9519.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

let times = Number(input[0]);
let string = input[1];
let len = string.length;

// 문자열 역변환
const reverseBlink = (str) => {

  let arr = str.split('');
  let res = Array(len).fill('');
  let half = Math.floor(len / 2);
  
  for (let i = 0; i < half; i++) {
    res[i] = arr[2 * i];
    res[len - i - 1] = arr[2 * i + 1];
  }

  if (len % 2 === 1) {
    res[half] = arr[len - 1];
  }
  
  return res.join('');
};

// 문자열 형태가 반복되는 사이클 찾기
let cycle = 0;
let source = string; 

while (true) {
  source = reverseBlink(source);
  cycle++;
  if (source === string) break;
}

for (let i = 0; i < times % cycle; i++) {
  string = reverseBlink(string);
}

console.log(string);

