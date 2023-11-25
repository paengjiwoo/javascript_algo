function solution(num_list) {
  let surplus = 1
  let sum = 0
  for (let i = 0; i < num_list.length; i++) {
    surplus = surplus * Number(num_list[i])
    sum += Number(num_list[i])
  }
  return surplus < sum * sum ? 1 : 0
}