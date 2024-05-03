function solution(num_list, n) {
    let ans = [];
    for (let i = 0; i < num_list.length / n; i++) {
      let arr = [];
      for (let j = 0; j < n; j++) {
        arr.push(num_list[i * n + j]);
      }
      ans.push(arr);
    }
    return ans;
}