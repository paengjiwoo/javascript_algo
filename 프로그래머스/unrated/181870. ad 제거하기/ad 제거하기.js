function solution(strArr) {
  let ans = []
  for (let i = 0; i < strArr.length; i++) {
    let isAd = false
    for (let j = 0; j < strArr[i].length - 1; j++) {
      if (strArr[i].slice(j, j + 2) === "ad") {
        isAd = true
        break;
      }
    }
    if (!isAd) {
      ans.push(strArr[i])
    }
  }
  return ans;
}