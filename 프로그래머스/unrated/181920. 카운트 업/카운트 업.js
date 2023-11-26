function solution(start_num, end_num) {
  let ans = new Array()
  for (let i = start_num; i < end_num + 1; i++) {
    ans.push(i)
  }
  return ans;
}