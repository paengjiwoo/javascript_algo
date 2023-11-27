function solution(my_string, queries) {
  let strArray = my_string.split('')
  for (const query of queries) {
    const startIdx = Number(query[0])
    const endIdx = Number(query[1])
    const curr = strArray.slice(startIdx, endIdx + 1).reverse()
    strArray = [
      ...strArray.slice(0, startIdx),
      ...curr,
      ...strArray.slice(endIdx + 1)
    ]
  }
  return strArray.join('');
}