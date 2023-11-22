function solution(n) {
  let number = Number(n)
  let ans = 0
  while (number > 0) {
    if (n % 2) {
      ans += number   
    } else {
      ans += number * number
    }
    number -= 2
  }
  return ans;
}
