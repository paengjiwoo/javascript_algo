function solution(numLog) {
  let ans = ""
  let currNum = numLog[0]
  for (let i = 1; i < numLog.length; i++) {
    const point = numLog[i] - currNum
    if (point === 1) {
      ans += "w"
    } else if (point === -1) {
      ans += "s"
    } else if (point === 10) {
      ans += "d"
    } else if (point === -10) {
      ans += "a"  
    }
    currNum = numLog[i]
  }
  return ans;
}