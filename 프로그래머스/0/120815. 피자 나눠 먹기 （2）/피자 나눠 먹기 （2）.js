function solution(n) {
  let ans = 0
  for (let i = 1; i <= 6 * n; i++) {
    if (6 * i < n) continue;
    if (!((6 * i) % n)) {
      ans = i
      break
    }
  }
  return ans;
}