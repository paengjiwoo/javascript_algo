const filePath = process.platform === "linux" ? "/dev/stdin" : "./input/29754.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")

const [broadcastLen, days] = input.shift().split(' ').map(Number);

const broadcasts = input.map(a => a.split(' ')).sort((a, b) => Number(a[1]) - Number(b[1]));

let virtuals = new Map();
const notRealVirtuals = new Map();
const realVirtuals = new Map();

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

let idx = 0;
// 일주일 단위로 계산
for (let week = 1; week <= days / 7; week++) {
  // 일주일간 방송 합계 구하기
  for (let day = 7 * (week - 1) + 1; day <= week * 7; day++) {
    while (idx < broadcastLen) {
      const [name, date, start, end] = broadcasts[idx];

      if (notRealVirtuals.has(name)) {
        idx++;
        continue;
      }

      if (Number(date) !== day) break;

      if (!virtuals.has(name)) {
        virtuals.set(name, [1, parseTime(end) - parseTime(start)])
      } else {
        const [dayInfo, timeInfo] = virtuals.get(name);
        virtuals.set(name, [dayInfo + 1, timeInfo + parseTime(end) - parseTime(start)])
      }
      idx++;
    }
  }

  // 일주일 방송 시간을 토대로 진짜 버츄얼 유튜버인지 확인
  for (const [key, value] of virtuals) {
    const [dayInfo, timeInfo] = value;

    if (dayInfo >= 5 && timeInfo / 60 >= 60) {
      if (!realVirtuals.has(key)) realVirtuals.set(key, 1);
      else { realVirtuals.set(key, realVirtuals.get(key) + 1) };
    } else {
      notRealVirtuals.set(key, true);
    }
  }

  virtuals = new Map();
}

// 모든 주차의 조건을 만족하는 진짜 버츄얼 유튜버 가려내기
let ans = [];
for (const [key, value] of realVirtuals) {
  if (value === days / 7) ans.push(key);
}

console.log(ans.length > 0 ? ans.sort().join('\n') : -1);
