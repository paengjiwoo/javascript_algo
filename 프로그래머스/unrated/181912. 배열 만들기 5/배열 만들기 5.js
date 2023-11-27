function solution(intStrs, k, s, l) {
  let ans = []
  for (const num of intStrs) {
    const curr = num.toString().slice(s, s + l)
    if (Number(curr) > Number(k)) {
      ans.push(Number(curr))
    }
  }
  return ans;
}