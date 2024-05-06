function solution(box, n) {
    box = box.map(a => Math.floor(a / n))
    return box[0] * box[1] * box[2];
}