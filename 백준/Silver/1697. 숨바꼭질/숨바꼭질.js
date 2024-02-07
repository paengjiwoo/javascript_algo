const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, K] = input.split(' ').map(Number)

if (N === K) {
  console.log(0)
} else {
  let visited = Array.from({length: 100001}, () => -1)
  let ans = -1
  let q, temp
  visited[N] = 0
  q = [N]
  while (ans < 0) {
    temp = q.shift()
  
    for (const num of [temp - 1, temp + 1, temp * 2]) {
      if (0 <= num && num <= 100000 && visited[num] < 0) {
        if (num === K) {
          ans = visited[temp] + 1
          break
        }
        visited[num] = visited[temp] + 1
        q.push(num)
      }
    }
  }
  console.log(ans)
}