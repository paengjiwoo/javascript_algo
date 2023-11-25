function solution(num_list) {
  const len = num_list.length
  const lastNum = Number(num_list[len-1])
  const frontNum = Number(num_list[len-2])
  
  if (lastNum > frontNum) {
    num_list.push(lastNum - frontNum)
  } else {
    num_list.push(lastNum * 2)
  }
  return num_list;
}