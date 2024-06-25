function solution(board) {
  const len = board.length;
  const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        for (const dir of dirs) {
          let x = i + dir[0];
          let y = j + dir[1];
          if (x >= 0 && x < len && y >= 0 && y < len) {
            if (!board[x][y]) board[x][y] = 2;
          }
        }
      }
    }
  }
  
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (!board[i][j]) ans++;
    }
  }
  return ans;
}