function binarySearch(houses, mid, routers) {
  let cnt = 1;
  let temp = houses[0];
  for (const house of houses) {
    if (house - temp >= mid) {
      temp = house;
      cnt++;
    }
  }
  return cnt >= routers;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test/2110.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const routers = Number(input.shift().split(' ')[1]);

const houses = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = houses.at(-1);

let mid;

while (left <= right) {
  mid = Math.floor((left + right) / 2);

  if (binarySearch(houses, mid, routers)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);