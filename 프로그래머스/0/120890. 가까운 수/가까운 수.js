function solution(array, n) {
    array.sort((a, b) => b - a)
    let res = [101, 0]
    for (let i = 0; i < array.length; i++) {
        let cal = Math.abs(n - array[i])
        if (res[0] >= cal) { 
            res[0] = cal
            res[1] = array[i]
        } else if (res[0] < cal) break;
    }
    return res[1];
}