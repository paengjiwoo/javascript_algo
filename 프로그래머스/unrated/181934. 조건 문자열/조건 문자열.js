function solution(ineq, eq, n, m) {
  const num1 = Number(n)
  const num2 = Number(m)
  if (ineq === ">") {
    if (eq === "=") {
      return n >= m ? 1 : 0
    } else {
      return n > m ? 1 : 0
    }
  } else {
    if (eq === "=") {
      return n <= m ? 1 : 0
    } else {
      return n < m ? 1 : 0
    } 
  }
}