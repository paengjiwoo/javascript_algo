function solution(n, control) {
  let ans = Number(n)
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      ans += 1
    } else if (control[i] === "s") {
      ans -= 1
    } else if (control[i] === "d") {
      ans += 10
    } else if (control[i] === "a") {
      ans -= 10
    }
  }
  return ans;
}