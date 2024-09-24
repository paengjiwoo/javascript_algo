const fs = require("fs");
const [x, y, c] = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split(" ").map(Number);

let high = Math.min(x, y);
let low = 1;
let ans = 0;

while (low + 0.001 <= high) {
    let w = (low + high) / 2;
    let h1 = Math.sqrt(x * x - w * w);
    let h2 = Math.sqrt(y * y - w * w);
    let guess_c = (h1 * h2) / (h1 + h2);

    if (guess_c >= c) {
        ans = w;
        low = w;
    } else {
        high = w;
    }
}

console.log(ans);