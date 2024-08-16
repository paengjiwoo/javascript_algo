const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...arr);
let s, l, cnt;
let res = right - left;

while (left <= right) {
  let mid = Math.floor((right + left) / 2);

  // 1. 현재 mid 기준 구간 나누는 시행
  s = arr[0];
  l = arr[0];
  cnt = 1;

  for (let i = 0; i < N; i++) {
    if (l < arr[i]) l = arr[i];
    if (s > arr[i]) s = arr[i];
    if (l - s > mid) {
      cnt++;
      l = arr[i];
      s = arr[i];
    }
  }
  
  // 2. 현재 mid 기준 나뉜 구간의 수 기준으로 범위 이동
  // 2 - 1. cnt(구간의 수)가 M보다 작거나 같다 
  // → 현재의 mid도 조건 만족, 더 작은 mid 찾을 수 있는지 탐색
  if (cnt <= M) {
    right = mid - 1;
    // 최솟값 갱신
    res = Math.min(res, mid);
    // 2 - 2. cnt(구간의 수)가 M보다 크다 → mid가 더 커져야 함을 의미
  } else if (cnt > M) left = mid + 1
}

console.log(res);
