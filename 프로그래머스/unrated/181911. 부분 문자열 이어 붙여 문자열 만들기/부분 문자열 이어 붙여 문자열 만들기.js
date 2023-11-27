function solution(my_strings, parts) {
  let ans = ""
  for (let i = 0; i < my_strings.length; i++) {
    ans += my_strings[i].slice(Number(parts[i][0]), Number(parts[i][1]) + 1)
  }
  return ans;
}