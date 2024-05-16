function solution(numbers) {
    const map = new Map()
    map.set('zero', '0')
    map.set('one', '1')
    map.set('two', '2')
    map.set('three', '3')
    map.set('four', '4')
    map.set('five', '5')
    map.set('six', '6')
    map.set('seven', '7')
    map.set('eight', '8')
    map.set('nine', '9')
    
    let ans = ''
    let str = ''
    for (let i = 0; i < numbers.length; i++) {
        str += numbers[i]
        if (map.has(str)) {
            ans += map.get(str)
            str = ''
        }
    }
    return Number(ans);
}