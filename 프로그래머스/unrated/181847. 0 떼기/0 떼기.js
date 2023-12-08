function solution(n_str) {
  let arr = n_str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "0") {
      return arr.slice(i).join("");
    }
  }
}