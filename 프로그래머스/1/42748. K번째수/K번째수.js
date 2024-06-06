function solution(array, commands) {
    let ans = [];
    for (let i = 0; i < commands.length; i++) {
        const curr = array.slice(commands[i][0] - 1, commands[i][1]);
        curr.sort((a, b) => a - b);
        ans.push(curr[commands[i][2] - 1]);
    }
    return ans;
}