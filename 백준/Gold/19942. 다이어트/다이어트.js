const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const [mp, mf, ms, mv] = input.shift().split(' ').map(Number)
const ingredients = input.map(a => a.split(' ').map(Number))

let costs = Infinity
let box = []

function solve(nutri, cost, numbers, idx) {
  if (nutri[0] >= mp && nutri[1] >= mf && nutri[2] >= ms && nutri[3] >= mv) {
    if (cost < costs) {
      costs = cost
      box = numbers.slice()
    }
    return
  }

  if (cost > costs) return

  for (let i = idx; i <= N; i++) {
    let nutrient = Array.from({length: 4}, (_, index) => nutri[index] + ingredients[i - 1][index])
    numbers.push(i)
    solve(nutrient, cost + ingredients[i - 1][4], numbers, i + 1)
    numbers.pop()
  }
}

solve([0, 0, 0, 0], 0, [], 1)

if (costs !== Infinity) {
  console.log(costs)
} else console.log(-1)
if (box.length) console.log(box.join(' '))