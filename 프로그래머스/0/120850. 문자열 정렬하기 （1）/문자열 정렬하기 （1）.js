function solution(my_string) {
    let ans = [];
    for (let i = 0; i < my_string.length; i++) {
        if (!(isNaN(my_string[i]))) {
            ans.push(Number(my_string[i]));
        }
    }
    return ans.sort();
}