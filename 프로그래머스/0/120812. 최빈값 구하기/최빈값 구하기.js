function solution(array) {
  let arr = new Array(1001).fill(0);
  for (let i = 0; i < array.length; i++) arr[array[i]]++;
  let ans = 0;
  let max = 0;
  for (let l = 0; l < 1001; l++) {
    if (max < arr[l]) { 
      ans = l
      max = arr[l]
    } else if (max === arr[l]) {
      ans = -1
    }
  }
  return ans;
}