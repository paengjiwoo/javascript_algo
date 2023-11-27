function solution(number) {
  let num = 0
  for (let i = 0; i < number.length; i++) {
    num += Number(number[i])
  }
  return num % 9;
}