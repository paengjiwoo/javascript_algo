const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ovenDepth = Number(input[0].split(' ')[0]);
const oven = input[1].split(' ').map(Number);
const doughs = input[2].split(' ').map(Number);

for (let i = 1; i < ovenDepth; i++) {
  oven[i] = Math.min(oven[i], oven[i - 1]);
}

let depth = ovenDepth;
for (const dough of doughs) {
  while (depth > 0 && oven[depth - 1] < dough) {
    depth--;
  }
  if (!depth) break;
  depth--;
}

console.log(depth ? depth + 1 : 0);