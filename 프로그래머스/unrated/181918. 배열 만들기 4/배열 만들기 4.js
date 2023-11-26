function solution(arr) {
  var stk = [];
  let i = 0
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i])
      i += 1
    } else {
      const len = stk.length
      if (stk[len - 1] < arr[i]) {
        stk.push(arr[i])
        i += 1
      } else {
        stk.pop()
      }
    }
  }
  return stk;
}