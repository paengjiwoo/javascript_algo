function solution(order) {
  const str = order.toString()
  let ans = 0
  const clap = ['3', '6', '9']
  for (let i = 0; i < str.length; i++) {
    if (clap.includes(str[i])) ans++
  }
  return ans;
}