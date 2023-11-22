function solution(strArr) {
  let count = Array.from({ length: 31 }, () => []);
  let max_count = 0
  strArr.forEach(str => {
    const str_length = str.length
    count[str_length].push(str)
    if (max_count < count[str_length].length) {
        max_count = count[str_length].length
    }
  })
  return max_count
}