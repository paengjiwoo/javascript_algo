function solution(array, height) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      return array.length - i;
    };
  };
  return 0;
}