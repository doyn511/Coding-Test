function solution(x, n) {
    const arr = [];
    let num = x;
    
    for(let i = 1; i <=n; i++){
        arr.push(x*i);
    }
    
    return arr;
}