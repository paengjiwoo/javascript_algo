function solution(a, b) {
    const num1 = a.toString() + b.toString()
    const num2 = b.toString() + a.toString()
    return Math.max(Number(num1), Number(num2))
}