function solution(binomial) {
  const calculation = binomial.split(' ')
  if (calculation[1] === "+") {
    return Number(calculation[0]) + Number(calculation[2])
  } else if (calculation[1] === "-") {
    return Number(calculation[0]) - Number(calculation[2])
  } else if (calculation[1] === "*") {
    return Number(calculation[0]) * Number(calculation[2])
  }
}