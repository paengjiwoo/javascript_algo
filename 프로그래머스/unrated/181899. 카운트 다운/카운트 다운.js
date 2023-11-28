function solution(start_num, end_num) {
  let res = []
  for (let i = start_num; i > end_num - 1; i--) {
    res.push(i)
  }
  return res;
}