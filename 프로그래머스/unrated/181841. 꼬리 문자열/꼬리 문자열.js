function solution(str_list, ex) {
  let ans = ""
  for (const str of str_list) {
    let flag = true
    let arr = str.split('')
    for (let i = 0; i < str.length - ex.length + 1; i++) {
      if (arr.slice(i, i + ex.length).join('') === ex) {
        flag = false
        continue
      }
    }
    if (flag) {
      ans += str   
    }
  }
  return ans;
}
