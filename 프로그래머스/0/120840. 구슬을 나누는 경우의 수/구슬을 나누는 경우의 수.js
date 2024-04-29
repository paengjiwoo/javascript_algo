function solution(balls, share) {
  let numer = 1
  for (let i = balls; i > share; i--) numer *= i
  let denomi = 1
  for (let j = balls - share; j > 1; j--) denomi *= j
  return Math.floor(numer / denomi);
}