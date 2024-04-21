function solution(my_string, n) {
  let ans = ''
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      ans += my_string[i]
    } 
  }
  return ans;
}