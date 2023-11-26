function solution(my_string, index_list) {
  let ans = ""
  for (const idx of index_list) {
    ans += my_string[idx]
  }
  return ans;
}