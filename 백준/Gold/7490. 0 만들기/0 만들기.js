const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

function checkFomula(N, cnt, str) {
  if (cnt > N) {
    if (checkZero(str) === 0) {
      return console.log(str);
    }
    return;
  }

  checkFomula(N, cnt + 1, str + ' ' + cnt.toString());
  checkFomula(N, cnt + 1, str + '+' + cnt.toString());
  checkFomula(N, cnt + 1, str + '-' + cnt.toString());
}

function checkZero(str) {
  const cal = str.replaceAll(' ', '');
  let calFunction = new Function(`return ${cal}`);
  return calFunction();
}

for (let t = 1; t <= T; t++) {
  const N = Number(input[t]);
  checkFomula(N, 2, '1');
  if (t !== T) console.log('');
}