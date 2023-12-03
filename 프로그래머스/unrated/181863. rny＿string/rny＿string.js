function solution(rny_string) {
  let res = ""
  for (let i = 0; i < rny_string.length; i++) {
    if (rny_string[i] === "m") {
      res += "rn"
    } else {
      res += rny_string[i]
    }
  }
  return res;
}