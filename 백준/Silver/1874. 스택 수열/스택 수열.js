const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

const iter = input.shift();

let ans = [];

let stack = [];

let stackNum = 1;

for(let i = 0; i < iter; i++){
    let num = input[i];
    
    while(stackNum <= num){
        stack.push(stackNum);
        stackNum++;
        ans.push("+");
    }
    
    let stackPop = stack.pop();
    ans.push("-");
    
    if(stackPop !== num){
        ans = ["NO"];
        break;
    }   
}

console.log(ans.join("\n"));