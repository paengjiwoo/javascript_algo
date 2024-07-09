function solution(s){
  let check = 0;
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === '(') check++;
    else if (bracket === ')') check--;
    
    if (check < 0) return false;
  }
  return !check ? true : false;
}