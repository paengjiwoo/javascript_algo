function solution(arr) {
  let res = [];
  for (const num of arr) {
    for (let i = 0; i < num; i++) {
      res.push(num)
    }
  }
  return res;
}