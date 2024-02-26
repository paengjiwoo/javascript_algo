const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// LIS (가장 긴 증가하는 부분 수열) 문제
// DP
const N = Number(input.shift())
const nums = input[0].split(' ').map(Number)

// 현재 i 인덱스를 기준으로 발견한
// 최장 길이는 dp 배열에
// 최장 길이의 부분 배열은 seq에 
// 저장합니다
let dp = Array.from({length: N}, () => 1)
let seq = Array.from({length: N}, () => [])
seq[0] = [nums[0]]

let idx
let maxIdx = 0
let max = 1
for (let i = 1; i < N; i++) {
  idx = -1
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
      // dp 배열에 발견된 최장 길이를 저장합니다.
      dp[i] = dp[j] + 1
      idx = j
    }
  }
  if (max < dp[i]) {
    // max 변수를 활용해 최장길이를 갱신합니다.
    max = dp[i]
    // maxIdx 변수를 활용해 최장 길이값이 발견된 인덱스를 저장합니다.
    maxIdx = i
  }
  // i 인덱스를 기준으로 발견된 최장 길이의 부분 배열을 seq에 저장합니다.
  seq[i] = idx !== -1 ? seq[idx].concat(nums[i]) : [nums[i]]
  // 스프레드 연산자 대신 concat 메서드 활용으로 더 빠르게 동작
}

console.log(max)
console.log(seq[maxIdx].join(' '))