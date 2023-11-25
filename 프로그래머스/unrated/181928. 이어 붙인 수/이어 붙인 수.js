function solution(num_list) {
  let odd = ''
  let even = ''
  for (let i = 0; i < num_list.length; i++) {
    if (Number(num_list[i] % 2)) {
      odd += `${num_list[i]}`  
    } else {
      even += `${num_list[i]}`
    }
  }
  return Number(odd) + Number(even)
}