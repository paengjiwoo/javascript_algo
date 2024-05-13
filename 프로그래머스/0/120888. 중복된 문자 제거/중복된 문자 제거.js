function solution(my_string) {
    let ans = "";
    for (let i = 0; i < my_string.length; i++) {
        if (ans.includes(my_string[i])) continue;
        ans += my_string[i];
        
    }
    return ans;
}