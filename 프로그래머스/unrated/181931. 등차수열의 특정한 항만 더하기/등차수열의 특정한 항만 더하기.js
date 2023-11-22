function solution(a, d, included) {
  let ans = 0
  for (let i = 0; i < included.length; i++) {
    const num = Number(a) + Number(d) * i
    if (included[i]) {
      ans += num
    }
  }
  return ans;
}