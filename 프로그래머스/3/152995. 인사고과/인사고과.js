function solution(scores) {
  const wanho = scores.shift();
  const wanhoTotal = wanho[0] + wanho[1];
    
  scores.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
  let rank = 1;
  let maxPeerScore = 0;
    
  for (const score of scores) {
    const [workScore, peerScore] = score;
    if (workScore > wanho[0] && peerScore > wanho[1]) return -1;
      
    if (peerScore >= maxPeerScore) {
      maxPeerScore = peerScore;
      if (workScore + peerScore > wanhoTotal) rank++;
    }
  }

  return rank;
}