function solution(myString) {
  let ans = ""
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].localeCompare("l") < 0) {
      ans += "l"
    } else {
      ans += myString[i]
    }
  }
  return ans;
}