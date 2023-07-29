const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

// 재귀함수를 활용해 조합 구현
// function combination(k, n) {
//   if (k == 0) {
//     return 1
//   } else if (n < k) {
//     return 0
//   } else {
//     return combination(k-1, n-1) + combination(k, n-1)
//   }
// }

// input.forEach((i) => {
//   const newArray = i.split(' ')
//   console.log(combination(Number(newArray[0]), Number(newArray[1])))
// })


// 조합 공식 활용
function factorial(n) {
  let num = 1
  for (let i=1; i<n+1; i++) {
    num *= i
  }
  return num
}

input.forEach((i) => {
  const newArray = i.split(' ')
  const k = Number(newArray[0])
  const n = Number(newArray[1])

  console.log(Math.round(factorial(n)/factorial(n-k)/factorial(k)))
})