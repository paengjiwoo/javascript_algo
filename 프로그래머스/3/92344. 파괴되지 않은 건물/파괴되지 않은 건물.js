function solution(board, skill) {
  let M = board.length;
  let N = board[0].length;
    
  let progress = Array.from({length: M + 1}, () => new Array(N + 1).fill(0));
    
  for (const [type, x1, y1, x2, y2, degree] of skill) {
    progress[x1][y1] += type === 1 ? -degree : degree
    progress[x1][y2 + 1] += type === 1 ? degree : -degree
    progress[x2 + 1][y1] += type === 1 ? degree : -degree
    progress[x2 + 1][y2 + 1] += type === 1 ? -degree : degree
  }
    
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      progress[i][j + 1] += progress[i][j]
    }
  }
    
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      progress[i + 1][j] += progress[i][j]
    }
  }
    
  let cnt = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      board[i][j] += progress[i][j]
      if (board[i][j] > 0) cnt++;
    }
  }
    
  return cnt;
}