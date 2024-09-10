const filePath = process.platform === "linux" ? "/dev/stdin" : "./input/16434.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [len, initialAtk] = input.shift().split(' ').map(Number);
const stages = input.map(stage => stage.split(' ').map(Number));

function checkATK(maxHP) {
  let playerHP = maxHP;
  let playerATK = initialAtk;
  for (let [type, atk, hp] of stages) {
    if (type === 1) {
      const attackTurns = Math.ceil(hp / playerATK);
      const damageTurns = attackTurns - 1;
      const totalDamage = BigInt(damageTurns * atk);

      if (playerHP <= totalDamage) return false;

      playerHP -= totalDamage;

    } else if (type === 2) {
      playerHP = maxHP > playerHP + BigInt(hp) ? playerHP + BigInt(hp) : maxHP;
      playerATK += atk;
    }
  }
  
  return playerHP > 0n;
};

let start = 1n;
let end = BigInt(len) * 1000000n * 1000000n;
let mid;
let ans;

while (start < end) {
  mid = (start + end) / 2n;

  if (checkATK(mid)) {
    ans = mid;
    end = mid;
  } else {
    start = mid + 1n;
  }
}

console.log(ans.toString());