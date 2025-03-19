function solution(prices) {
    const answer = [];
    
    for(let i = 0; i < prices.length; i++){
        let time = 0;
        
        // 마지막 index인 경우, 0초 return
        if(i === prices.length-1){
            answer.push(time);
            break;
        }
        
        // 현재 index 이후의 값들과 비교
        for(let j = i+1; j < prices.length; j++){
            if(prices[j] >= prices[i]){
                time++;
                continue;
            }else{
                time++;
                break;
            }
        }
        answer.push(time);
    }
    return answer;
}