function solution(num_list, n) {
  let start = num_list.slice(n)
  let end = num_list.slice(0, n)
  return [...start, ...end];
}