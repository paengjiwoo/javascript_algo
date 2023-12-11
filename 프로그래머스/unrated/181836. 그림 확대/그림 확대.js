function solution(picture, k) {
  let res = []
  for (const line of picture) {
    let str = ""
    for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < k; j++) {
        str += line[i]
      }
    }
    for (let h = 0; h < k; h++) {
      res.push(str)
    }
  }
  return res;
}