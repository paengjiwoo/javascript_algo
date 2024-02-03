const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input)

let flag = false

function check(str) {
  let len = str.length
  let end = len - 1

  for (let i = 1; i <= parseInt(len / 2); i++) {
    const left = str.substring(end - i, end)
    const right = str.substring(end, end + i)
    if (left === right) return false
    end--
  }
  return true
}

function solve(cnt, num) {

  if (flag) return

  if (!check(num)) return

  if (cnt === n) {
    console.log(num)
    flag = true
    return
  }

  solve(cnt + 1, num + '1')
  solve(cnt + 1, num + '2')
  solve(cnt + 1, num + '3')
}

solve(0, '')