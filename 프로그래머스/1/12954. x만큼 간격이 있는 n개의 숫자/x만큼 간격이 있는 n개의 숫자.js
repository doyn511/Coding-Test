function solution(x, n) {
    const arr = [];
    let num = x;
    
    for(let i = 1, num = x; i <=n; i++, num+=x){
        arr.push(num);
    }
    
    return arr;
}