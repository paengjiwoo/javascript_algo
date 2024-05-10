function solution(n) {
    // 에라토스테네스의 체
    let arr = new Array(n + 1).fill(0)
    for (let i = 2; i <= n; i++) {
        if (!arr[i]) {
            for (let j = i * 2; j <= n; j += i) {
                arr[j] = 1
            }
        }
    }
    
    let ans = []
    for (let i = 2; i <= n; i++) {
        if (!arr[i] && !(n % i)) ans.push(i)
    }
    return ans;
}