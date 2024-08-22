const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findOutline() {
  let visited = Array.from({length: N}, () => Array.from({length: M}, () => 0));
  let q = [[0, 0]];
  let melt = [];

  while (q.length) {
    const [y, x] = q.pop();

    for (let dir of dirs) {
      ny = y + dir[0];
      nx = x + dir[1];

      if ( ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;
      visited[ny][nx] = 1;

      if (cheese[ny][nx]) {
        melt.push([ny, nx]);
      } else {
        q.push([ny, nx]);
      }
    }
  }
  return melt;
}

function meltDown(meltList) {
  for (const melted of meltList) {
    cheese[melted[0]][melted[1]] = 0;
  }
}

// N : 사각형 모양 판의 세로 길이, M : 사각형 모양 판의 가로 길이
const [N, M] = input.shift().split(' ').map(Number);

let cheese = input.map(a => a.split(' ').map(Number));
let melted = 1;
let ans = 0;

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

while (melted) {
  
  const melt  = findOutline();

  if (!melt.length) break;
  
  meltDown(melt);

  melted = melt.length;
  ans++;
}

console.log(ans);
console.log(melted);