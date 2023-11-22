function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let new_my = my_string.split('')
    let point = Number(s)
    for (let i = 0; i < overwrite_string.length; i++) {
      new_my[point] = overwrite_string[i]
        point += 1
    }
    return new_my.join('');
}