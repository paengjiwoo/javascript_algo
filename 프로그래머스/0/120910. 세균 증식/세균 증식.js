function solution(n, t) {
  let res = n;
  for (let i = 1; i <= t; i++) {
    res = res * 2
  }
  return res;
}