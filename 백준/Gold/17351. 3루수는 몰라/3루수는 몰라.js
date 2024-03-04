const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
let field = input.map(s => s.split(''))
field.unshift(Array.from({length: N + 1}, () => 0))
field.map(s => s.unshift(0))
let dp = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 0))
const str = ['A', 'L', 'O', 'M']

// 새로 생성된 MOLA 문자열이 있는지 확인하는 함수
function check(i, j, n) {
  if (i < 1 || j < 1) return 0;
  // check 함수의 세번째 인자로 처음에는 늘 0이 들어오기 때문에
  // 탐색을 시작한 위치가 'A'인 경우에만 'MOLA'문자열이 있는지 탐색을 하게 된다
  if (field[i][j] === str[n]) {
    if (n === 3) return dp[i][j] + 1;
    return Math.max(check(i - 1, j, n + 1), check(i, j - 1, n + 1))
  }
  return 0
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    // 이전 MOLA 누적값과 새로 MOLA를 형성한 값 중 큰 값을 현재 위치에 저장한다
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], check(i, j, 0))
  }
}
console.log(dp[N][N])