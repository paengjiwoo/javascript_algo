function solution(my_string, m, c) {
  let ans = ""
  for (let i = c - 1; i < my_string.length; i += m) {
    ans += my_string[i]
  }
  return ans;
}