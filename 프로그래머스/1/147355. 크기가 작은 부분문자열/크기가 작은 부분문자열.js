function solution(t, p) {
    const len = p.length;
    let cnt = 0;
    
    for(let i = 0; i <= t.length-len; i++){
        const num = t.slice(i,i+len);
        
        if(Number(num) <= Number(p)) cnt++;
    }
    
    return cnt;
}