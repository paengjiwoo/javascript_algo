const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let triangle = []

rl.on('line', function (line) {
    input = line.split(' ');
    for (let i = 1; i <= input[0]; i++) {
      let line = ''
      for (let j = 0; j < i; j++) {
        line += '*'
      }
      triangle.push(line)
    }
}).on('close', function () {
    console.log(triangle.join('\n'));
});