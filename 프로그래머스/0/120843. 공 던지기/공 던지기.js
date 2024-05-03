function solution(numbers, k) {
    let cnt = ( k - 1 ) * 2;
    return numbers[cnt % numbers.length];
}