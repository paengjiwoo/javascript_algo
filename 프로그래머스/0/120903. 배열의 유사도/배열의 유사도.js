function solution(s1, s2) {
  let ans = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) ans++;
  }
  return ans;
}