function solution(q, r, code) {
  let ans = ""
  for (let i = 0; i < code.length; i++) {
    if (i % Number(q) === Number(r)) {
      ans += code[i]
    }
  }
  return ans;
}