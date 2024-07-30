const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [w, h] = input[0].split(' ').map(Number);
const [tx, ty] = input[1].split(' ').map(Number);

const searchRoutes = (sy, sx, ey, ex) => {
  let dp = Array.from({ length: h + 1 }, () => Array(w + 1).fill(0));
  dp[sy][sx] = 1;

  for (let y = sy; y <= ey; y++) {
    for (let x = sx; x <= ex; x++) {
      if (y === sy && x === sx) continue;
      if (y > sy) dp[y][x] = (dp[y][x] + dp[y - 1][x]) % 1000007;
      if (x > sx) dp[y][x] = (dp[y][x] + dp[y][x - 1]) % 1000007;
    }
  }

  return dp[ey][ex];
};

let toast = searchRoutes(1, 1, ty, tx);
let school = searchRoutes(ty, tx, h, w);
console.log((toast * school) % 1000007);