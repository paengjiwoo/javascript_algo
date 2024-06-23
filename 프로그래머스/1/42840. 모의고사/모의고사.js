function check(arr, answer) {
  let len = 0;
  let idx = 0;
  let ansCnt = 0;
  while (len < answer.length) {
    if (arr[idx] === answer[len]) ansCnt++; 

    if (idx === arr.length - 1) idx = 0;
    else idx++;
    len++;
  }
  return ansCnt;
}

function solution(answers) {
  let students = [0, 0, 0, 0];
  const first = [1, 2, 3, 4, 5];
  students[1] = check(first, answers);
    
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  students[2] = check(second, answers);  
  
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  students[3] = check(third, answers);
  
  let max = Math.max(...students);
  let ans = [];;
  students.forEach((grade, idx) => grade === max && ans.push(idx));
  return ans;
}