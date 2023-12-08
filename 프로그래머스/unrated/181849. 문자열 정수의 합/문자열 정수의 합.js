function solution(num_str) {
  let ans = 0
  for (let i = 0; i < num_str.length; i++) {
    ans += Number(num_str[i])
  }
  return ans; 
}