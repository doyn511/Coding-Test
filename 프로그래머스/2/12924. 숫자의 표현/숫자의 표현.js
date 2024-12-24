function solution(n) {
    let cnt = 1; // 자기 자신일 경우 1가지 default
    const maxNum = Math.ceil(n/2);
    
    for(let i = 1; i <= maxNum; i++){
        let sum = i;
        
        for(let j = i+1; j <= maxNum; j++){
            sum += j;
            
            if(sum > n){
                break;
            }else if(sum === n){
                cnt++;
                break;
            }
        }
    }
    return cnt;
}