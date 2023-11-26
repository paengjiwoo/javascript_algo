function solution(n) {
  let curr = n
  let ans = new Array()
  ans.push(n)
  while (curr !== 1) {
    if (curr % 2) {
      curr = 3 * curr + 1
    } else {
      curr = curr / 2
    }
    ans.push(curr)
  }
  return ans;
}