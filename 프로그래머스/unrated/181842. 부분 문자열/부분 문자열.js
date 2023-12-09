function solution(str1, str2) {
  let arr = str2.split('')
  for (let i = 0; i < str2.length; i++) {
    if (arr.slice(i, i + str1.length).join('') === str1) {
      return 1;
    }
  }
  return 0;
}