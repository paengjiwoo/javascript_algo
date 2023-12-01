function solution(arr) {
  let start = -1
  let end = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      if (start < 0) {
        start = i
        end = i
      } else {
        end = i
      }
    }
  }
  return start >= 0 ? arr.slice(start, end + 1) : [-1];
}