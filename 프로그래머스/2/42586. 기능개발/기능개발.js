function solution(progresses, speeds) {
  let ans = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    let cnt = 0;
    while (progresses.length && progresses[0] >= 100) {
      cnt++;
      progresses.shift();
      speeds.shift();
    }
    if (cnt) ans.push(cnt);
  }
  return ans;
}