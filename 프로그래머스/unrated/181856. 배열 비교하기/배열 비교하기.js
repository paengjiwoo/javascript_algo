function solution(arr1, arr2) {
  const len1 = arr1.length
  const len2 = arr2.length
  const sum1 = arr1.reduce((acc, curr) => {
    return acc + curr }, 0)
  const sum2 = arr2.reduce((acc, curr) => {
    return acc + curr }, 0)
    
  if (len1 !== len2) {
    return len1 > len2 ? 1 : -1 
  } else {
    if (sum1 === sum2) {
      return 0
    } else {
      return sum1 > sum2 ? 1 : -1  
    }
  }
}

// 여기서는 reduce 사용하면 되지 않을까용