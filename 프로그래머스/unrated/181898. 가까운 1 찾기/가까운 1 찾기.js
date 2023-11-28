function solution(arr, idx) {
  let ans = -1
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      ans = i
      break;
    }
  }
  return ans;
}