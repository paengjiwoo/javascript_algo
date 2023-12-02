function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2) {
      strArr[i] = strArr[i].toUpperCase()
    } else {
      strArr[i] = strArr[i].toLowerCase()
    }
  }
  return strArr;
}