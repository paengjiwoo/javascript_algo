function solution(flo) {
  let floStr = flo.toString()
  let ans = ""
  let i = 0
  while (i < floStr.length) {
    if (floStr[i] === ".") {
      break
    }
      
    ans += floStr[i]
    i += 1
  }
  return ans ? Number(ans) : 0;
}