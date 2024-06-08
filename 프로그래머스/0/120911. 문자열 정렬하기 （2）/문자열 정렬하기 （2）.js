function solution(my_string) {
  const arr_string = my_string.split('');
  for (let i = 0; i < arr_string.length; i++) {
    arr_string[i] = arr_string[i].toLowerCase();
  };
  return arr_string.sort().join('');
}