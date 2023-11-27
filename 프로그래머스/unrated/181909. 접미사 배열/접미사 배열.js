function solution(my_string) {
  let ans = new Array()
  for (let i = 0; i < my_string.length; i++) {
    ans.push(my_string.slice(i))
  }
  return ans.sort();
}