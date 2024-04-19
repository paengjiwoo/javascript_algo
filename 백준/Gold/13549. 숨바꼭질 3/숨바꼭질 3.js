const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, K] = input.map(Number)
let visited = new Array(100001).fill(0)
let count = new Array(100001).fill(0)

let q = [N]
visited[N] = 1
while (q.length > 0) {
  let temp = q.shift()

  if (temp === K) break;

  for (const next of [temp * 2, temp - 1, temp + 1]) {
    if (next < 0 || next > 100000) continue;
    if (next === K) {
      count[next] += count[temp] + (next !== temp * 2 ? 1 : 0)
      q = []
      break
    }

    if (!visited[next]) {
      count[next] += count[temp] + (next !== temp * 2 ? 1 : 0)
      visited[next] = 1
      q.push(next)
    }
  }
}
console.log(count[K])