function solution(arr, queries) {
  for (const query of queries) {
    const i = Number(query[0])
    const j = Number(query[1])
    const numI = arr[i]
    const numJ = arr[j]
    arr[i] = numJ
    arr[j] = numI
  }
  return arr;
}