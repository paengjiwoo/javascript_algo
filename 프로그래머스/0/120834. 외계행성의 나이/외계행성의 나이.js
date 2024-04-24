function solution(age) {
  const translator = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    '3' : 'd',
    '4' : 'e',
    '5' : 'f',
    '6' : 'g',
    '7' : 'h',
    '8' : 'i',
    '9' : 'j'
  }
  let ans = ''
  let ageStr = age.toString()
  for (let i = 0; i < ageStr.length; i++) {
    ans += translator[ageStr[i]]
  }
  return ans;
}

