function solution(arr, queries) {
  let ans = new Array()
  for (const query of queries) {
    let min = 1000001
    for (let i = Number(query[0]); i < query[1] + 1; i ++) {
      if (arr[i] > query[2] && min > arr[i]) {
        min = arr[i]
      }
    }
    if (min === 1000001) {
      ans.push(-1)
    } else {
      ans.push(min)
    }
  }
  return ans;
}