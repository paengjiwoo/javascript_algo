function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    let x = Math.abs(dots[0][0] - dots[3][0]);
    dots.sort((a, b) => a[1] - b[1]);
    let y = Math.abs(dots[0][1] - dots[3][1]);
    return x * y;
}