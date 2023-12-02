function solution(myString, pat) {
  let myLowerStr = myString.toLowerCase()
  let LowerPat = pat.toLowerCase()
  
  for (let i = 0; i < myLowerStr.length - LowerPat.length + 1; i++) {
    const str = myLowerStr.slice(i, i + LowerPat.length)
    if (str === LowerPat) {
      return 1;
    }
  }
  return 0;
}