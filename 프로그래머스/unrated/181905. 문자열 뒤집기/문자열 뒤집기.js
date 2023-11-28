function solution(my_string, s, e) {
  const strArray = my_string.split('')
  const reverseStr = strArray.slice(s, e + 1).reverse()
  const ans = [
    ...strArray.slice(0, s),
    ...reverseStr,
    ...strArray.slice(e + 1)
  ]
  return ans.join('');
}