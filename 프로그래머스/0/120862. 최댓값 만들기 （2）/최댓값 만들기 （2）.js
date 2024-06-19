function solution(numbers) {
  let max = -100000000
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let curr = numbers[i] * numbers[j];
      if (max < curr) max = curr;
    }
  }
  return max;
}