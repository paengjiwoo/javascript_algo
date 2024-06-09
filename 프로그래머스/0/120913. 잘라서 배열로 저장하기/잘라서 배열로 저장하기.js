function solution(my_str, n) {
  let arr = my_str.split('');
  let ans = [];
  for (let i = 0; i < my_str.length / n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (!arr.length) break;
      str += arr.shift()
    };
    ans.push(str);
  };
  return ans;
}