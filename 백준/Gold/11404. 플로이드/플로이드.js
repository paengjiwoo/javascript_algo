const filePath = process.platform === "linux" ? "/dev/stdin" : "./input/11404.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// len : 도시의 개수
const len = Number(input.shift());
const buses = Number(input.shift());

let cities = Array.from({length: len}, () => Array.from({length: len}, () => Infinity));

for (let i = 0; i <= len - 1; i++) cities[i][i] = 0;

for (let i = 0; i < buses; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number);
  cities[start - 1][end - 1] = Math.min(cost, cities[start - 1][end - 1]);
};

for (let c = 0; c <= len - 1; c++) {
  for (let a = 0; a <= len - 1; a++) {
    for (let b = 0; b <= len - 1; b++) {
      if (a === b) continue;
      cities[a][b] = Math.min(cities[a][b], cities[a][c] + cities[c][b]);
    }
  }
}

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    if (cities[i][j] === Infinity) cities[i][j] = 0;
  }
}

cities.map(line => console.log(line.join(' ')));