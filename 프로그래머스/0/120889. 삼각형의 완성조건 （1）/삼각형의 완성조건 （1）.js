function solution(sides) {
    const max = Math.max(...sides);
    const idx = sides.indexOf(max);
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        if (i === idx) continue;
        sum += sides[i]
    }
    return sum > max ? 1 : 2;
}