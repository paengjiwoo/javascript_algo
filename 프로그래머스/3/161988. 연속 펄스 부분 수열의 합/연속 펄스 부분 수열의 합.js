function solution(sequence) {
  let perse = 1;
  let ans1 = 0;
  let ans2 = 0;
  let max = 0;
    
  let min1 = 0;
  let min2 = 0;
    
  for (let i = 0; i < sequence.length; i++) {
    ans1 += sequence[i] * perse;
    ans2 += sequence[i] * (-1) * perse;
    
    max = Math.max(max, ans1 - min1, ans2 - min2);
      
    min1 = Math.min(min1, ans1);
    min2 = Math.min(min2, ans2);
      
    perse *= -1   
  }
  return max;
}