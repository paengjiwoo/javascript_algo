const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input.shift().split(' ').map(x => +x)
let ground = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 5))
let nutrient = [Array.from({length: N}, () => 0)]
for (let i = 0; i < N; i++) {
  nutrient.push(input.shift().split(' ').map(x => +x))
}
nutrient.map(a => a.unshift(0))
let trees = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => []))
for (let t = 0; t < M; t++) {
  const [x, y, old] = input.shift().split(' ').map(x => +x)
  trees[x][y].push(old)
}
const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
let ans = 0

for (let k = 0; k < K; k++) {
  // spring && summer
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // spring : 나무가 양분 먹고, 못먹는 나무는 죽음
      // 나무가 없는 경우 패스
      if (!trees[i][j].length) continue

      // 어린 나무부터 양분을 먹을 수 있도록 정렬
      if (trees[i][j].length > 1) trees[i][j].sort((a, b) => a - b)
      let dieTrees = []
      for (let t = 0; t < trees[i][j].length; t++) {
        // 나무가 양분을 먹을 수 있는 상태
        if (ground[i][j] >= trees[i][j][t]) {
          ground[i][j] -= trees[i][j][t]
          trees[i][j][t]++;
        } else {
          // 더이상 땅에 양분이 없으면 break
          // dieTrees로 summer를 대비
          // 해당 for문에서 땅의 양분 확인을 지속적으로 하기 때문에
          // summer의 죽은 나무로 부터의 양분 획득은 해당 for문과 별개로 실시
          dieTrees = trees[i][j].slice(t)
          if (!t) trees[i][j] = []
          else { trees[i][j] = trees[i][j].slice(0, t) }
          break
        }
      }
      // summer : 죽은 나무 양분으로 변함
      for (let d = 0; d < dieTrees.length; d++) {
        ground[i][j] += parseInt(dieTrees[d] / 2)
      }
    }
  }
  // fall : 나무 번식 && winter : 양분 추가
  // 양분을 먹어야 하는 나무가 새롭게 생겨나기 때문에
  // 봄 & 여름 수행이 모두 끝나고 시작되어야 함
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // winter : 양분 추가 (fall에 양분과 관련된 계산 없으므로 먼저 수행)
      ground[i][j] += nutrient[i][j]

      // 해당하는 칸에 나무가 없으면 continue
      if (!trees[i][j].length) continue
      
      // fall : 나무 번식
      for (let t = 0; t < trees[i][j].length; t++) {
        if ((trees[i][j][t] % 5)) continue
        for (const dir of dirs) {
          let nx = i + dir[0]
          let ny = j + dir[1]
          if (nx <= 0 || nx > N || ny <= 0 || ny > N) continue
          trees[nx][ny].push(1)
        }
      }
    }
  }
}

// K년 후 상도 땅에 살아있는 나무의 개수
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (!trees[i][j].length) continue
    ans += trees[i][j].length
  }
}

console.log(ans)
