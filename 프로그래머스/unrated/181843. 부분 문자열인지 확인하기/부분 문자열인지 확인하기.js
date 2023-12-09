function solution(my_string, target) {
  let arr = my_string.split('')
  for (let i = 0; i < my_string.length; i++) {
    if (arr.slice(i, i + target.length).join('') === target) {
      return 1;
    }
  }
  return 0;
}