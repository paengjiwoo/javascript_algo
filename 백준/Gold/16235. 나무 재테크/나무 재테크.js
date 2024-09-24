const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input.shift().split(' ').map(Number);
const ground = Array.from({length: N + 1}, () => new Uint32Array(N + 1).fill(5));
const nutrient = [new Uint32Array(N + 1)];
for (let i = 1; i <= N; i++) {
    nutrient.push(new Uint32Array([0, ...input.shift().split(' ').map(Number)]));
}

const trees = new Map();
for (let i = 0; i < M; i++) {
    const [x, y, age] = input[i].split(' ').map(Number);
    const key = x * 1000 + y;
    if (!trees.has(key)) trees.set(key, []);
    trees.get(key).push(age);
}

const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

for (let k = 0; k < K; k++) {
    const newTrees = new Map();
    
    // Spring & Summer
    for (const [key, ages] of trees.entries()) {
        const x = Math.floor(key / 1000);
        const y = key % 1000;
        let nutrient = ground[x][y];
        const survivedTrees = [];
        let deadNutrient = 0;
        
        ages.sort((a, b) => a - b);
        
        for (const age of ages) {
            if (nutrient >= age) {
                nutrient -= age;
                survivedTrees.push(age + 1);
                if ((age + 1) % 5 === 0) {
                    for (const [dx, dy] of dirs) {
                        const nx = x + dx, ny = y + dy;
                        if (nx > 0 && nx <= N && ny > 0 && ny <= N) {
                            const newKey = nx * 1000 + ny;
                            if (!newTrees.has(newKey)) newTrees.set(newKey, []);
                            newTrees.get(newKey).push(1);
                        }
                    }
                }
            } else {
                deadNutrient += Math.floor(age / 2);
            }
        }
        
        ground[x][y] = nutrient + deadNutrient;
        if (survivedTrees.length > 0) trees.set(key, survivedTrees);
        else trees.delete(key);
    }
    
    // Fall & Winter
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            ground[i][j] += nutrient[i][j];
            const key = i * 1000 + j;
            if (newTrees.has(key)) {
                if (!trees.has(key)) trees.set(key, []);
                trees.get(key).push(...newTrees.get(key));
            }
        }
    }
}

let ans = 0;
for (const ages of trees.values()) {
    ans += ages.length;
}
console.log(ans);