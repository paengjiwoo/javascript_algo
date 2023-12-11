function solution(arr) {
  let ans = arr
  const column = arr[0].length
  const row = arr.length
  if (column > row) {
    const newArr = Array.from({length : column}, () => 0)
    for (let i = 0; i < column - row; i++) {
      ans.push(newArr)
    }
  } else if (row > column) {
    for (let r = 0; r < row; r++) {
      for (let a = 0; a < row - column; a++) {
        ans[r].push(0)
      }
    }
  }
  return ans;
}