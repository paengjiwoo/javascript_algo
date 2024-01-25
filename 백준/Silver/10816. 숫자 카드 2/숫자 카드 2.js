const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0])
const cards = input[1].split(' ').map(Number).sort((a, b) => a- b)
const M = Number(input[2])
const nums = input[3].split(' ').map(Number)

let map = new Map()
for (const card of cards) {
  map.set(card, map.has(card) ? map.get(card) + 1 : 1)
}
let ans = []
for (const num of nums) {
  ans.push(map.get(num) || 0)
}
console.log(ans.join(' '))