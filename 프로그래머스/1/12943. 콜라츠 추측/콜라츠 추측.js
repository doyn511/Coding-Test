function solution(num) {
    let cur = num;
    let cnt = 1;
    
    if(cur === 1){
        return 0;
    }
    
    while(cur !== 1){
        if(cnt === 500){
            return -1;
        }
        
        cur % 2 === 0 ? cur = cur/2 : cur = (cur*3)+1;
        cnt++;
    }
    
    return cnt-1;
}