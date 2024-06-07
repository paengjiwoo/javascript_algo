function solution(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }
  return map.size < nums.length / 2 ? map.size : nums.length / 2;
}