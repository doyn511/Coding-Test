function solution(citations) {
    citations.sort((a,b) => b-a);
    const max = Math.max(...citations);
    let h = 0;
    let idx = 0;
    
    while(idx <= max){
        const cnt = citations.filter((el) => el >= idx).length;
        
        if(idx <= cnt){
            h = Math.max(h, idx);
        }
        
        idx++;
    }
    
    return h;
}