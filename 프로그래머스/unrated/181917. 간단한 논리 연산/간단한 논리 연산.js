function solution(x1, x2, x3, x4) {
  let first = Boolean(x1) || Boolean(x2)
  let second = Boolean(x3) || Boolean(x4)
  if (!first || !second) {
    return false;
  } else {
    return true;
  }
}