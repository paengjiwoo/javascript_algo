function solution(n) {
    let res = 1;
    let curr = 1;
    while (true) {
      if (curr * (res + 1) > n) break;
      res++;
      curr *= res;
    }
    return res;
}