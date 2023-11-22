function solution(num_list) {
  const sorted = num_list.sort(function(a, b) {return (a-b)})
  return sorted.slice(0, 5)
}