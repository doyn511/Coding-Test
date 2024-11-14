function solution(n) {
    let idx = 2;
    
    while(idx < n){
        if(n%idx === 1) return idx;
        idx++;
    }
}