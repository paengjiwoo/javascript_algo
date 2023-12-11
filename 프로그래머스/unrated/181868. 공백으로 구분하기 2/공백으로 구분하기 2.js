function solution(my_string) {
  let arr = my_string.split(' ')
  let ans = []
  for (const str of arr) {
    if (str !== "") {
      ans.push(str)
    }
  }
  return ans;
}