function solution(array) {
  let ans = 0;
  for (let i = 0; i < array.length; i++) {
    const numStr = array[i].toString();
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === "7") ans++;
    };
  };
  return ans;
}