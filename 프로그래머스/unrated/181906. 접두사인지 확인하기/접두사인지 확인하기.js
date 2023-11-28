function solution(my_string, is_prefix) {
  for (let i = 1; i < my_string.length; i++) {
    const str = my_string.slice(0, i)
    if (str === is_prefix) {
      return 1;
    } 
  }
  return 0;
}