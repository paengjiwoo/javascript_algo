function solution(arr) {
  let len = Math.pow(2, Math.ceil(Math.log2(arr.length)));
  // let len = 2
  // while (len < arr.length) {
  //   len = len * 2
  // }
  return [...arr, ...Array(len - arr.length).fill(0)];
}