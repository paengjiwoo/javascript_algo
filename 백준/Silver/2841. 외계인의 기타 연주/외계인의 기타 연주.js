const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, P] = input.shift().split(' ').map(Number);
const notes = input.map(a => a.split(' ').map(Number));
let guitar = Array.from({length: 7}, () => []);
let frets = new Array(7).fill(0);
let cnt = 0;

for (let i = 0; i < N; i++) {
  const [string, fret] = notes[i];
  const tempFret = frets[string];
  
  if (tempFret < fret) {
    cnt++;
    guitar[string].push(fret);
  } else if (tempFret > fret) {
    const len = guitar[string].length
    let lastIdx = -1;
    for (let j = len - 1; j >= 0; j--) {
      if (guitar[string][j] <= fret) {
        lastIdx = j; break;
      }
      guitar[string].pop();
      cnt++;
    }
    if (lastIdx === -1 || guitar[string][lastIdx] !== fret) {
      guitar[string].push(fret);
      cnt++;
    }
  }
  
  frets[string] = fret;
}
console.log(cnt);