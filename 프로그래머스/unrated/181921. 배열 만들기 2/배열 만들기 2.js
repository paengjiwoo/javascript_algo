function solution(l, r) {
  let ans = new Array()
  let curr = l
  while (curr < r + 1) {
    const num = curr.toString()
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "0" || num[j] === "5") {
        if (j === num.length - 1) {
          ans.push(Number(num))
        }
      } else {
         break;
      }
    }
    curr += 1
  }
  if (ans.length === 0) { ans.push(-1) }
  return ans;
}