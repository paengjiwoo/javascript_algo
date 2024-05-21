function solution(my_string) {
  const cal = my_string.split(' ')
  let ans = Number(cal[0])
  for (let i = 1; i < cal.length; i += 2) {
    if (cal[i] === "+") {
      ans += Number(cal[i + 1])
    } else if (cal[i] === "-") {
      ans -= Number(cal[i + 1])
    }
  }
  return ans;
}