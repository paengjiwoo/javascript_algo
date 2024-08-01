const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input.shift())
const n = parseInt(input[0])
const m = parseInt(input[2])

const A = input[1].split(' ').map(Number)
const B = input[3].split(' ').map(Number)

const setSubtotalCount = (arr) => {
  const subtotalMap = new Map();
  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      subtotalMap.set(sum, (subtotalMap.get(sum) || 0) + 1);
    }
  }
  return subtotalMap;
}

let subtotalA = setSubtotalCount(A);
let subtotalB = setSubtotalCount(B);

let ans = 0
for (let [sumA, countA] of subtotalA) {
  const target = T - sumA;
  if (subtotalB.has(target)) {
    ans += countA * subtotalB.get(target);
  }
}

console.log(ans)