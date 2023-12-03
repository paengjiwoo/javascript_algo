function solution(myString) {
  let res = [];
  let str = ""
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "x") {
      if (str) {
        res.push(str)
        str = ""
      }
    } else {
      str += myString[i]
    }
  }
  if (str) {
    res.push(str)
  }
  return res.sort();
}