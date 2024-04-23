function solution(n) {
  if (n < 2) return 0;
  else if (n < 4) return 2;
  else {
    if (n % 2) n--;
    return (2 + n) * n / 4;
  }
}