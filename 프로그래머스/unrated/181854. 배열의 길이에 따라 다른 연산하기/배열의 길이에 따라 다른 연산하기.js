function solution(arr, n) {
  const len = arr.length
  let count = len % 2 ? 0 : 1
  const modified_arr = arr.map(num => Number(num))
  
  while (count < len) {
    modified_arr[count] += Number(n)
    count += 2
  }
  return modified_arr
}