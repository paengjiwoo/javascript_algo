function solution(rsp) {
  let ans = ''
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === '2') {
      ans += '0'
    } else if (rsp[i] === '0') {
      ans += '5'
    } else { ans += '2'}
  }
  return ans;
}