const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const signs = input[0].split(' ')

let visited = new Array(10)
let maxNum = ''
let minNum = ''

function check(i, j, sign) {
  if (sign === '<') {
    return i < j
  } else {
    return i > j
  }
}

function solve(depth, temp) {
  if (depth === N + 1) {
    // 생성되는 순서 기준
    if (!minNum.length) {
      minNum = temp
    } else {
      maxNum = temp
    }
    return
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue
    if (!depth || check(temp[depth - 1], i, signs[depth - 1])) {
      visited[i] = 1
      solve(depth + 1, temp + i)
      visited[i] = 0
    }
  }
}

solve(0, '')
console.log(maxNum)
console.log(minNum)