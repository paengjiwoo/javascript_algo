function solution(emergency) {
  let origin = emergency.slice()
  let sorted = emergency.sort((a, b) => b - a)
  let ans = [];
  for (let i = 0; i < emergency.length; i++) {
    ans.push(sorted.indexOf(origin[i]) + 1)
  }
  return ans;
}