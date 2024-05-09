function solution(brown, yellow) {
    const num = (brown - 4) / 2;
    for (let i = Math.floor(num / 2); i >= 1; i--) {
        if (i * (num - i) === yellow) {
            return [num - i + 2, i + 2];
        }
    }
}