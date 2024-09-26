function solution(target) {

  const scores = [
    ...Array.from({length: 20}, (_, i) => i + 1),
    ...Array.from({length: 20}, (_, i) => (i + 1) * 2),
    ...Array.from({length: 20}, (_, i) => (i + 1) * 3),
    50
  ]; 
    
  const singles = new Set([...Array.from({length: 20}, (_, i) => i + 1), 50]);
    
  const dp = Array(target + 1).fill().map(() => [Infinity, 0]);
  dp[0] = [0, 0];
    
  for (let i = 1; i <= target; i++) {
    for (const score of scores) {
      if (i >= score) {
        let [darts, singlesCount] = dp[i - score];
        darts++;
        if (singles.has(score)) {
          singlesCount++;
        }
                
        if (darts < dp[i][0] || (darts === dp[i][0] && singlesCount > dp[i][1])) {
          dp[i] = [darts, singlesCount];
        }
      }
    }
  }
    
  return dp[target];
}