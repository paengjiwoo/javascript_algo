const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 스티커를 90도 회전시키는 함수
const rotateSticker = (sticker) => {
  const R = sticker.length;
  const C = sticker[0].length;
  let newSticker = Array.from({ length: C }, () => new Array(R).fill(0));
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      newSticker[j][R - 1 - i] = sticker[i][j];
    }
  }
  return newSticker;
};

// 현재 위치(시작위치 x, y)에 스티커를 붙일 수 있는지 확인하는 함수
const checkAttach = (laptop, sticker, x, y, nr, nc) => {
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (laptop[x + i][y + j] === 1 && sticker[i][j] === 1) return false;
    }
  }
  return true;
};

// 현재 위치에 스티커를 붙일 수 있는 것으로 판명된 경우. 스티커를 실제로 붙이는 함수
const attachSticker = (notebook, sticker, x, y, nr, nc) => {
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (sticker[i][j] === 1) notebook[x + i][y + j] = 1;
    }
  }
};

const [N, M, K] = input.shift().split(' ').map(Number);
let laptop = Array.from({length: N}, () => new Array(M).fill(0));

let cnt = 0;
let idx = 0;
while (cnt < K) {
  const [R, C] = input[idx].split(' ').map(Number);
  idx++;

  let sticker = [];
  for (let i = 0; i < R; i++) {
    sticker.push(input[idx].split(' ').map(Number));
    idx++;
  }

  let attached = false;
  let r = 0;
  while (r < 4) {
    if (r > 0) sticker = rotateSticker(sticker)
    const nr = sticker.length;
    const nc = sticker[0].length;
    for (let x = 0; x <= N - nr; x++) {
      for (let y = 0; y <= M - nc; y++) {
        if (x + nr > N || y + nc > M) continue;
        if (checkAttach(laptop, sticker, x, y, nr, nc)) {
          attachSticker(laptop, sticker, x, y, nr, nc);
          attached = true;
          r = 5;
          break;
        }
      }
      if (attached) break;
    }
    r++;
  }
  cnt++;
}

let ans = 0;
laptop.map((line) => ans += line.reduce((acc, curr) => acc + curr, 0));
console.log(ans);