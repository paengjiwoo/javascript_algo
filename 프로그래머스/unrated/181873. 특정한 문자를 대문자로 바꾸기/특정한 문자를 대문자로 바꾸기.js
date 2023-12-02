function solution(my_string, alp) {
  let ans = ""
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      ans += alp.toUpperCase()
    } else {
      ans += my_string[i]
    }
  }
  return ans;
}