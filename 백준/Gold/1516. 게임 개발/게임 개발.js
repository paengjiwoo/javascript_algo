const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0])
let cost = Array.from({length:N + 1}, () => 0)
let link = Array.from({length:N + 1}, () => [])
let cnt = Array.from({length:N + 1}, () => 0)

for (let i = 1; i < N + 1; i++) {
  const time = input[i].split(' ').map(Number)
  cost[i] = time[0]
  for (let j = 1; j < time.length - 1; j++) {
    link[time[j]].push(i)
    cnt[i] += 1
  }
}

let dp = Array.from({length:N + 1}, () => 0)
let q = []
for (let i = 1; i < N + 1; i++) {
  if (cnt[i]===0) {
    q.push(i)
    dp[i] += cost[i]
  }
}

while (q.length) {
  node = q.shift()
  for (const tonode of link[node]) {
    cnt[tonode] -= 1
    dp[tonode] = Math.max(dp[node] + cost[tonode], dp[tonode])
    if (cnt[tonode] === 0) {
      q.push(tonode)
    }
  }
}

for (let idx = 1; idx < N + 1; idx++) {
  console.log(dp[idx])
}