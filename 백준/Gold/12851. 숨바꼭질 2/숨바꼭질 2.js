const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, K] = input.map(Number)

let visited = Array.from({length: 100001}, () => [-1, 0])
visited[N][0] = 0
visited[N][1] = 1

q = [N]
while (q.length) {
  n = q.shift()
  for (const move of [n - 1, n + 1, n * 2]) {
    if (0 <= move && move < 100001) {
      if (visited[move][0] == -1) {
        visited[move][0] = visited[n][0] + 1
        visited[move][1] = visited[n][1]
        q.push(move)
      } else if (visited[move][0] == visited[n][0] + 1) {
        visited[move][1] += visited[n][1]
      }
    }
  }
}

console.log(visited[K][0])
console.log(visited[K][1])