function solution(n, numlist) {
  let ans = []
  for (let i = 0; i < numlist.length; i++) {
    if (!(numlist[i] % n)) ans.push(numlist[i])
  }
  return ans;
}