const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findDistricFive(x, y, d1, d2) {
  let district = Array.from({length: N}, () => Array(N).fill(0));

  for (let i = 0; i <= d1; i++) {
    district[x + i][y - i] = 5;
    district[x + d2 + i][y + d2 - i] = 5;
  }
  for (let i = 0; i <= d2; i++) {
    district[x + i][y + i] = 5;
    district[x + d1 + i][y - d1 + i] = 5;
  }

  for (let r = x + 1; r < x + d1 + d2; r++) {
    let flag = false;
    for (let c = 0; c < N; c++) {
      if (district[r][c] === 5) {
        flag = !flag;
      }
      if (flag) district[r][c] = 5;
    }
  }

  return district;
}

function calculateVote(x, y, d1, d2) {
  let voters = [0, 0, 0, 0, 0];
  let district = findDistricFive(x, y, d1, d2);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (district[r][c] === 5) {
        voters[4] += map[r][c]
      } else {
        if (0 <= r && r < x + d1 && 0 <= c && c <= y) {
          voters[0] += map[r][c]
        } else if (0 <= r && r <= x + d2 && y < c && c <= N - 1) {
          voters[1] += map[r][c]
        } else if (x + d1 <= r && r <= N - 1 && 0 <= c && c < y - d1 + d2) {
          voters[2] += map[r][c]
        } else if (x + d2 < r && r <= N - 1 && y - d1 + d2 <= c && c <= N - 1) {
          voters[3] += map[r][c]
        }
      }
    }
  }

  return Math.max(...voters) - Math.min(...voters);
}

const N = Number(input.shift());
const map = input.map((a) => a.split(' ').map(Number));

let min = Infinity;

for (let x = 0; x < N - 2; x++) {
  for (let y = 0; y < N - 1; y++) {
    for (let d1 = 1; d1 < N - x && y - d1 >= 0; d1++) {
      for (let d2 = 1; d2 < N - x && y + d2 < N; d2++) {
        if (x + d1 + d2 >= N) continue;
          min = Math.min(min, calculateVote(x, y, d1, d2))
      }
    }
  }
}

console.log(min);