function solution(arr, queries) {
  for (const query of queries) {
    for (let i = query[0]; i < query[1] + 1; i++) {
      if (i % query[2] === 0) {
        arr[i] += 1
      }
    }
  }
  return arr;
}