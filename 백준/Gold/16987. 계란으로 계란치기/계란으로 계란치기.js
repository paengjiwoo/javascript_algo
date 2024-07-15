const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
function eggPuzzle(idx, eggs, cnt) {
  if (idx === N) return;

  if (eggs[idx][0] <= 0) eggPuzzle(idx + 1, eggs, cnt)
  else {
    for (let i = 0; i < N; i++) {
      if (i === idx || eggs[i][0] <= 0) continue;
      let curr = 0; 
      eggs[i][0] -= eggs[idx][1];
      eggs[idx][0] -= eggs[i][1];
      
      if (eggs[i][0] <= 0) curr++;
      if (eggs[idx][0] <= 0) curr++;

      max = Math.max(max, cnt + curr)
      eggPuzzle(idx + 1, eggs, cnt + curr);

      eggs[i][0] += eggs[idx][1];
      eggs[idx][0] += eggs[i][1];
    }
  }
};

const N = parseInt(input.shift());
let arr = input.map((a) => a.split(' ').map((b) => parseInt(b)));

eggPuzzle(0, arr, 0);
console.log(max);