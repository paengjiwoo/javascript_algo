const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findNextWord(word, size, idx) {
  if (size <= 2) {
    word.reverse();
    console.log(word.join(''));
    return;
  }

  // 맨 앞 문자 바꾸기
  let key = word[idx];
  let changeWord = 'a'; // 작은 수가 출력되기 위함

  let select = idx; // 선택된 위치 인덱스

  for (let i = idx + 1; i < size; i++) {
    // 노란색 영역 맨 앞에 수와 같거나 작은 경우 제외
    // 맨 앞글자보다 더 작은 경우는 다음에 나타나는 단어가 될 수 없음
    if (word[i] <= key) continue;

    // 가장 작은 수를 선택
    if (word[i] < changeWord) {
      
      changeWord = word[i];
      select = i;
    }
  }

  // 두 수를 교환
  word[idx] = word[select];
  word[select] = key;

  // 맨 앞을 제외하고 오름차순
  word = word.slice(0, idx + 1).concat(word.slice(idx + 1).sort());

  // 출력
  console.log(word.join(''));
}

const T = input.shift();

for (let t = 0; t < T; t++) {
  let word = input[t];
  let isChange = false; // 수정됐는지 체크
  const size = word.length;
  let arr = word.split('');

  // 끝 인덱스부터 역탐색
  for (let i = size - 2; i >= 0; i--) {

      // 내림차순을 끊는 인덱스를 찾으면 해당 인덱스에서 findNextWord 알고리즘 시작
      // 내림차순이 끝나는 부분 -> i 인덱스부터 size - 1인덱스 영역 중
      // i 인덱스를 맨앞으로 하는 마지막 문자열
      if (word[i] < word[i + 1]) {
          isChange = true;
          findNextWord(arr, size, i);
          break;
      }
  }

  // 값 수정이 없었다면, 문자 그대로 출력
  if (!isChange) console.log(word);
}
