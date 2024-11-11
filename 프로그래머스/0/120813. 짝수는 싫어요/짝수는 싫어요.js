function solution(n) {
    const oddArr = [];
    for(let i = 1; i <= n; i+=2){
        oddArr.push(i);
    }
    return oddArr;
}