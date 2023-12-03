function solution(myString) {
  let res = [];
  let cnt = 0
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "x") {
      res.push(cnt)
      cnt = 0
    } else {
      cnt += 1
    }
  }
  res.push(cnt)
  return res;
}