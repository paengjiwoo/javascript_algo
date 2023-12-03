function solution(myStr) {
  let res = [];
  let curr = ""
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
      if (curr) {
        res.push(curr)
        curr = ""
      } 
    } else {
      curr += myStr[i]
    }
  }
  if (curr) { res.push(curr) }
  return res.length ? res : ["EMPTY"];
}