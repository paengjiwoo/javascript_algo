const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const grades = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0
  }

let score = 0
let classes = 0
input.forEach((e) => {
  const info = e.split(' ');
  if (info[2] !== 'P') {
    const grade = Number(info[1])
    score += grades[info[2]] * grade;
    classes += grade
  }
})

console.log(score / classes)