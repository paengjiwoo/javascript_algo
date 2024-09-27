const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split("\n");

const N = Number(input.shift());
const classrooms = input.map(a => a.split(' ').map(Number)).sort((a, b) => a[1] - b[1]);

const ends = [];

const insertSorted = (arr, value) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, value);
};

for (let i = 0; i < N; i++) {
  const [_, start, end] = classrooms[i];

  if (ends.length > 0 && ends[0] <= start) {
    ends.shift();
  }

  insertSorted(ends, end);
}

console.log(ends.length);