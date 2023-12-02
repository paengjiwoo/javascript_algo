function solution(myString) {
  let ans = ""
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "a") {
      ans += myString[i].toUpperCase()
    } else if (myString[i] !== "A") {
      ans += myString[i].toLowerCase()
    } else {
      ans += myString[i]
    }
  }
  return ans;
}