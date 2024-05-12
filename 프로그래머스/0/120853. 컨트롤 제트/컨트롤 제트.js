function solution(s) {
    const arr = s.split(' ')
    arr.unshift('0')
    const len = arr.length
    let ans = 0
    let prefix = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (arr[i] === "Z") { 
            prefix[i] = prefix[i - 2]
            // "Z"는 arr의 index < 2 에 존재할 수 없으므로 해당 조건문 가능
        } else {
            prefix[i] = prefix[i - 1] + Number(arr[i])
        }
        if (i === len - 1) ans = prefix[i]
    }
    return ans;
}