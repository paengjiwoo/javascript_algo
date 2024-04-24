function solution(n) {
  const sqrt = Math.floor(Math.sqrt(n))
  let cnt = 0;
  for (let i = 1; i < sqrt + 1; i++) {
    if (!(n % i)) cnt += 2;
  }
  return cnt + (Math.pow(sqrt, 2) === n ? -1 : 0);
}