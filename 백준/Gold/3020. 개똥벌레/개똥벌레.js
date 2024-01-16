const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, H] = input.shift().split(' ').map(Number)
let bottomMemo = Array.from({length: H + 1}, () => 0)
let topMemo = Array.from({length: H + 1}, () => 0)

// 높이 저장
for (let i = 0; i < N / 2; i++) {
  bottomMemo[Number(input[2 * i])]++
  topMemo[Number(input[2 * i + 1])]++
}

// 높이 prefix sum
for (let i = H - 1; i > 0; i--) {
  bottomMemo[i] += bottomMemo[i + 1]
  topMemo[i] += topMemo[i + 1]
}

let min = Infinity
let cnt = 0
for (let i = 1; i <= H; i++) {
  const curr = bottomMemo[i] + topMemo[H - i + 1]
  if (min < curr) continue
  if (min > curr) {
    min = curr
    cnt = 0
  }
  cnt++;
}
console.log(min, cnt)