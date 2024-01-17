const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const N = parseInt(input)

let three = [];
let a = 2147483647;
let b = 1;
while (a >= b) {
  three.push(b);
  b *= 3;
}

let ans = 'NO'
function sol(total, cur) {
  if (!total) {
    ans = 'YES'
    return
  }
  if (cur === three.length || total < 0) return

  sol(total, cur + 1);
  sol(total - three[cur], cur + 1);
}

function check() {
  if (N !== 0) sol(N, 0);
  console.log(ans);
}

check();