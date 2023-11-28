function solution(my_string, indices) {
  let res = ""
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      res += my_string[i]
    }
  }
  return res;
}