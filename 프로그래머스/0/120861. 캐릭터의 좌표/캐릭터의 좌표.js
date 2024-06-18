function solution(keyinput, board) {
  let point = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "left":
          if (Math.abs(point[0] - 1) < board[0] / 2) {
              point[0] -= 1;
          }
          break;
      case "right":
          if (point[0] + 1 < board[0] / 2) {
              point[0] += 1;
          }
          break;
      case "up":
          if (point[1] + 1 < board[1] / 2) {
              point[1] += 1;
          }
          break;
      case "down":
          if (Math.abs(point[1] - 1) < board[1] / 2) {
              point[1] -= 1;
          }
          break;
    }
  }
  return point;
}