function solution(myString, pat) {
  let idx = 0
  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      idx = i + pat.length
    }
  }
  return myString.slice(0, idx);
}