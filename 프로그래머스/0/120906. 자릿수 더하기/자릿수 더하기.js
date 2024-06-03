function solution(n) {
  const nStr = n.toString();
  const arr = nStr.split('').map(str => parseInt(str))
  return arr.reduce((acc, curr) => { return acc + curr}, 0);
}