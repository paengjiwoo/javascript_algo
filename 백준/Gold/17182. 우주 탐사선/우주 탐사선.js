const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
let min = Infinity;

let dists = input.map(item => item.split(' ').map(Number));
// 플로이드 워셜로 출발지로부터 도착지에 도착하는 최단거리 기록 (중복 방문 허용)
for (let n = 0; n < N; n++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      dists[i][j] = Math.min(dists[i][j], dists[i][n] + dists[n][j]);
    }
  }
}

let visited = new Array(N).fill(0);
visited[K] = 1;

function dfs(S, depths, sum) {
  if (depths === N) {
    if (min > sum) min = sum
    return
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    dfs(i, depths + 1, sum + dists[S][i])
    visited[i] = 0;
  }
};

dfs(K, 1, 0);

console.log(min);