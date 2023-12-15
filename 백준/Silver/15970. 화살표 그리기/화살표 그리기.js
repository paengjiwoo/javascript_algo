const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
  arrows();
  process.exit();
});

function arrows() {
  const N = Number(input[0])
  const arr = Array.from({length: N}, () => [])
  let ans = 0
  
  for (let i = 1; i <= N; i++) {
    const curr = input[i].split(' ').map(num => Number(num))
    arr[curr[1] - 1].push(curr[0])
  }
  
  for (const color of arr) {
    color.sort((a, b) => a - b)
    if (color.length > 1) {
      ans += (color[1] - color[0]) + (color[color.length - 1] - color[color.length - 2])
      for (let j = 1; j < color.length - 1; j++) {
        ans += Math.min(color[j] - color[j - 1], color[j + 1] - color[j])
      }
    }
  }
  console.log(ans)
}