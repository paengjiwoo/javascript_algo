function solution(n) {
  let res = [];
  for (let i = 1; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (!(n % i)) {
      res.push(i);
      if (i !== n / i) {
        res.push(n / i);
      }
    }
  }
  return res.sort((a, b) => a - b);
}