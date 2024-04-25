let ans = 0;

function check(num, strong) {
  ans += Math.floor(num / strong)
  return num - Math.floor(num / strong) * strong;
}

function solution(hp) {
  hp = check(hp, 5)
  hp = check(hp, 3)
  hp = check(hp, 1)
  return ans;
}