function solution(d, budget) {
    let sum = 0;
    let idx = 0;
    
    d.sort((a,b) => a-b);
    
    for(const item of d){
        sum += item;
        
        if(sum > budget){
            break;
        }else{
            idx++;
            continue;
        }
    }
    
    return idx;
}