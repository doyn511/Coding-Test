function solution(array, n) {
    let cnt = 0;
    array.forEach((item) => {
        if(item === n) cnt++;
    })
    return cnt;
}