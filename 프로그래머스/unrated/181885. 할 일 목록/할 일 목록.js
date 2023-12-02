function solution(todo_list, finished) {
  let ans = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (!finished[i]) {
      ans.push(todo_list[i])
    }
  }
  return ans;
}