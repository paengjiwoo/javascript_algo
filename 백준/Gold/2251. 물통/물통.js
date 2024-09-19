const [A, B, C] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

const visited = Array(A + 1).fill(null).map(() => Array(B + 1).fill(0));
const q = [[0, 0]];
visited[0][0] = 1;
const ans = [];

while (q.length) {
  const [a, b] = q.shift();
  const c = C - a - b

  if (a === 0) {
    ans.push(c);
  }

  const cases = [
    a + b <= B ? [0, a + b] : [a - (B - b), B],  // A to B
    [0, b],  // A to C
    a + b <= A ? [a + b, 0] : [A, b - (A - a)],  // B to A
    [a, 0],  // B to C
    c + a > A ? [A, b] : [c + a, b],  // C to A
    c + b > B ? [a, B] : [a, c + b]   // C to B
  ]

  for (let i = 0; i < 6; i++) {
    const [na, nb] = cases[i];
    const nc = C - na - nb
    if (0 <= na && na <= A && 0 <= nb && nb <= B && 0 <= nc && nc <= C) {
      if (!visited[na][nb]) {
        visited[na][nb] = 1;
        q.push([na, nb]);
      }
    }
  }
}

console.log(ans.sort((a, b) => a - b).join(" "));