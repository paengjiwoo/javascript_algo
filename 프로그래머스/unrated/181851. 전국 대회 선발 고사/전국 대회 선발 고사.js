function solution(rank, attendance) {
  let filtered = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      filtered.push([rank[i], i])
    }
  }
  filtered.sort((a, b) => a[0] - b[0])
  return filtered[0][1] * 10000 + filtered[1][1] * 100 + filtered[2][1];
}