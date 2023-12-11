function solution(arr, k) {
  if (k % 2) {
    for (let o = 0; o < arr.length; o++) {
      arr[o] = arr[o] * k
    }
  } else {
    for (let e = 0; e < arr.length; e++) {
      arr[e] += k
    }
  }
  return arr;
}