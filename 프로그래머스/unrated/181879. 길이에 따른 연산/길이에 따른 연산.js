function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, curr) => acc + curr, 0);
  } else {
    let surplus = 1
    for (const num of num_list) {
      surplus = surplus * num
    }
    return surplus;
  }
}