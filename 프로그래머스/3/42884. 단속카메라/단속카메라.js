function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let endpoint = -300001;
    let cnt = 0;
    for (const route of routes) {
        if (route[0] > endpoint) {
            cnt++;
            endpoint = route[1]
        }
    }
    return cnt;
}