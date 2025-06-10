/**
1. 현재의 word가 숫자인지 아닌지 체크
*/
function solution(dartResult) {
    let cur = '';
    let idx = 0;
    const score = [];
    
    while(idx < dartResult.length){
        if(!isNaN(dartResult[idx])){
            cur += dartResult[idx];
        }else{
            // 숫자가 아닐 경우, 보너스 | 옵션 중 하나
            if(dartResult[idx] === 'S'){
                score.push(+cur);
            } else if(dartResult[idx] === 'D'){
                cur = Math.pow(+cur, 2);
                score.push(cur);
            } else if(dartResult[idx] === 'T'){
                cur = Math.pow(+cur, 3);
                score.push(cur);
            }
            cur = '';
            
            if(dartResult[idx+1] === '*'){
                if(score.length > 1 ){
                    score[score.length-2] *= 2;
                }
                score[score.length-1] *= 2;
                idx++;
            }else if(dartResult[idx+1] === '#'){
                score[score.length-1] *= -1;
                idx++;
            }

        }
        idx++;
    }
    
    let answer = 0;
    score.forEach((num) => answer += num);
    return answer;
    
}