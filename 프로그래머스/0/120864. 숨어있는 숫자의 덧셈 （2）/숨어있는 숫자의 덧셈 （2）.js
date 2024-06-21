function solution(my_string) {
  let sum = 0;
  let number = '';
  for (let i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
      if (number.length) sum += Number(number); number = '';
    } else {
      number += my_string[i];
    }
  }
  if (number.length) sum += Number(number);
  return sum;
}