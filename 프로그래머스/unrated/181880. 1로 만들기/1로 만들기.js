function solution(num_list) {
  let cnt = 0
  for (let i = 0; i < num_list.length; i++) {
    let num = num_list[i]
    while (num !== 1) {
      if (num % 2) {
        num = (num - 1) / 2
      } else {
        num = num / 2
      }
      cnt += 1
    }
  }
  return cnt;
}