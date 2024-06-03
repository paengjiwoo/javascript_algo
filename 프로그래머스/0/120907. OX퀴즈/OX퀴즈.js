function solution(quiz) {
  let res = [];
  for (let i = 0; i < quiz.length; i++) {
    const arr = quiz[i].split(' ');
    if (arr[1] === "-") {
      if (parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4])) {
        res.push("O");
      } else { res.push("X"); }
    } else {
      if (parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4])) {
        res.push("O");
      } else { res.push("X"); }
    }
  }
  return res;
};