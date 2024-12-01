function solution(t, p) {
    const len = p.length;
    let cnt = 0;
    
    for(let i = 0; i <= t.length-len; i++){
        const num = t.split('').slice(i,i+len).join('');
        
        if(num <= p) cnt++;
    }
    
    return cnt;
}