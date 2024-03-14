const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift())
const nums = input[0].split(' ').map(x => +x)

// DP
// dp에 담길 수 있는 값의 최대는 2^63 - 1로 큰 수이기에 BigInt를 사용합니다
let dp = Array.from({length: N - 1}, () => Array.from({length: 21}, () => BigInt(0)))
dp[0][nums[0]] = 1n
for (let i = 1; i < N - 1; i++) {
  for (let j = 0; j <= 20; j++) {
    // 이전 시행(i - 1번째 시행)까지에서 구해질 수 있는 값인지 확인합니다
    if (dp[i - 1][j] > 0) {
      // i - 1번째 시행까지 구한 값(j)에 i번째 값(nums[i])을 더하거나 빼서 구할 수 있는 0 이상 20 이하 값인 경우
      // i번째 시행에 해당 경우의 수를 기록합니다
      if (0 <= j + nums[i] && j + nums[i] <= 20) {
        dp[i][j + nums[i]] += BigInt(dp[i - 1][j])
      }
      if (0 <= j - nums[i] && j - nums[i] <= 20) {
        dp[i][j - nums[i]] += BigInt(dp[i - 1][j])
      }
    }
  }
}
// nums 베열의 가장 마지막 수가 구해지는 경우의 수를 출력합니다
console.log(dp[N - 2][nums[N - 1]].toString())