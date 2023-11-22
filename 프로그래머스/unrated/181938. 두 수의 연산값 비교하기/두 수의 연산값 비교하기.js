function solution(a, b) {
    const num1 = String(a) + String(b)
    const num2 = 2 * Number(a) * Number(b)
    return Math.max(Number(num1), num2)
}