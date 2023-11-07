const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ N, K ] = input[0].split(' ')

const ears = new Set();
const eyes = new Set();
for(let i=1; i<input.length; i++) {
    if(i <= N) {
        ears.add(input[i]);
    } else {
        eyes.add(input[i]);
    }
}

let intersection = []
ears.forEach((name) => {
  if(eyes.has(name)) intersection.push(name);
})
intersection.sort()

const len = intersection.length
console.log(len)
for (let i = 0; i < len; i++) {
  console.log(intersection[i])
}