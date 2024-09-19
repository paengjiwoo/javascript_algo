function solution(n, stations, w) {
  let answer = 0;
  let position = 1;
  const coverage = 2 * w + 1;
  const len = stations.length;

  for (let i = 0; i < len; i++) {
    const station = stations[i];
    const start = station - w;
    if (position < start) {
      answer += Math.ceil((start - position) / coverage);
    }
    position = station + w + 1;
  }

  if (position <= n) {
    answer += Math.ceil((n - position + 1) / coverage);
  }

  return answer;
}