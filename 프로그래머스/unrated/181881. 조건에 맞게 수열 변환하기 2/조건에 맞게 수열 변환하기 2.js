function solution(arr) {
  let prev = arr.slice();
  let curr = arr.slice();
  let cnt = 0
  
  while (true) {
    let isEqual = true;
    for (let i = 0; i < arr.length; i++) {
      if (curr[i] >= 50 && curr[i] % 2 === 0) {
        curr[i] = curr[i] / 2
      } else if (curr[i] < 50 && curr[i] % 2) {
        curr[i] = curr[i] * 2 + 1
      }
      
      if (curr[i] !== prev[i]) {
        isEqual = false
      }
    }
    if (isEqual) {
      return cnt; 
    } 
    cnt += 1
    prev = curr.slice();
  }
}