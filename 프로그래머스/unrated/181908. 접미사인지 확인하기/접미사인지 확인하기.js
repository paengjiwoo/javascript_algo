function solution(my_string, is_suffix) {
  let strings = []
  for (let i = 0; i < my_string.length; i++) {
    strings.push(my_string.slice(i))
  }
  return strings.includes(is_suffix) ? 1 : 0
}