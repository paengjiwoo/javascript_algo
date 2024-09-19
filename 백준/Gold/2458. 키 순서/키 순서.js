const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split("\n");

const [headcount, count] = input.shift().split(" ").map(Number);
const students = input.map(a => a.split(" ").map(Number));

const graph = Array(headcount + 1).fill(null).map(_ => Array(headcount + 1).fill(false));

for (let i = 0; i < count; i++) {
  const [s, e] = students[i];
  graph[s][e] = true
}

for (let i = 1; i <= headcount; i++) graph[i][i] = true;

for (let k = 1; k <= headcount; k++) {
  for (let i = 1; i <= headcount; i++) {
    for (let j = 1; j <= headcount; j++) {
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = true;
      }
    }
  }
}

let cntArr = Array(headcount + 1).fill(0);
for (let i = 1; i <= headcount; i++) {
  for (let j = 1; j <= headcount; j++) {
    if (graph[i][j] || graph[j][i]) cntArr[i]++;
  }
}

// 자신의 키가 몇 번째인지 알 수 있는 학생들
let ans = 0;
for (let i = 1; i <= headcount; i++) {
  if (cntArr[i] === headcount) ans++;
}

console.log(ans);

