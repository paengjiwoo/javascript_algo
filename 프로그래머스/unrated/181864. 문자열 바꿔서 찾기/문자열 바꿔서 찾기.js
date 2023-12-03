function solution(myString, pat) {
  let patStr = ""
  for (let i = 0; i < pat.length; i++) {
    if (pat[i] === "A") {
      patStr += "B"
    } else if (pat[i] === "B") {
      patStr += "A"
    }
  }

  for (let j = 0; j < myString.length - pat.length + 1; j++) {
    if (myString.slice(j, j + pat.length) === patStr) {
      return 1;
    }
  }
  return 0;
}