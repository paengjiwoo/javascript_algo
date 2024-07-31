const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function minDice(N, diceNums) {
  if (N === 1) {
    diceNums.sort((a, b) => a - b);
    return diceNums.reduce((acc, curr, idx) => { 
      if (idx === 5) return acc;
      return acc + curr;
    }, 0);
  }

  let sum = 0;
  let minList = new Array(3).fill(0);

  minList[0] = Math.min(diceNums[0], diceNums[5]);
  minList[1] = Math.min(diceNums[1], diceNums[4]);
  minList[2] = Math.min(diceNums[2], diceNums[3]);
  minList.sort((a, b) => a - b);

  sum += minList[0] * ((N - 2) * (N - 2) + (N - 1) * (N - 2) * 4);
  sum += (minList[0] + minList[1]) * ((N - 2) * 4 + (N - 1) * 4);
  sum += (minList[0] + minList[1] + minList[2]) * 4;

  return sum;
}

const N = Number(input[0]);
const diceNums = input[1].split(' ').map(Number);

console.log(minDice(N, diceNums));