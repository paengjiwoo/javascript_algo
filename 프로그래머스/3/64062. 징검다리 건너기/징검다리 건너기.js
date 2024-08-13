function solution(stones, k) {
  let left = 1;
  let right = 200000000;
    
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    
    let cnt = 0;
    for (const stone of stones) {
      if (stone < mid) {
        cnt++;
      } else cnt = 0;
        
      if (cnt === k) break;
    }
      
    if (cnt === k) right = mid - 1;
    else left = mid;
  }
  return left;
}