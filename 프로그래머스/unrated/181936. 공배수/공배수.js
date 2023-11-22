function solution(number, n, m) {
    const res1 = number % n
    const res2 = number % m
    return res1 === 0 && res2 === 0 ? 1 : 0
}