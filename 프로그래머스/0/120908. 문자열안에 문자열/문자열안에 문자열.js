function solution(str1, str2) {
  let str = "";
  let idx = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[idx]) {
      str += str1[i];
      idx++;
      if (str === str2) return 1;
    } else {
      str = "";
      idx = 0;
    };
  };
  return 2;
};