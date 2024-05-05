function solution(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 2; j < i; j++) {
            if (!(i % j)) cnt++;
        }
        if (cnt) ans++;
    }
    return ans;
}