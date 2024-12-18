function solution(s){
    let cnt = 0;

    for(let i = 0; i <=s.length-1; i++){
        s[i] === '(' ? cnt++ : cnt--;
        
        if(cnt<0) return false;
    }
    
    return cnt === 0 ? true : false;
    
}