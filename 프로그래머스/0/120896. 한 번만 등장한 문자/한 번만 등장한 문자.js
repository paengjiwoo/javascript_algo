function solution(s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }
  let ans = ''
  for (const [key, value] of map) {
    if (value === 1) ans += key
  }
  return ans.split('').sort().join('')
}