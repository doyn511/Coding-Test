/**
실패율 = 스테이지에 도달했지만 클리어 X / 스테이지에 도달한 사람
*/

function solution(N, stages) {
    const map = new Map();
    stages.sort((a,b) => a-b);
    
    stages.forEach((el) => {
        map.has(el) ? map.set(el, map.get(el)+1) : map.set(el, 1);
    })
    
    let failure = Array.from({length: N+1}, () => 0);
    
    for(let i = 1; i <= N; i++){
        // 스테이지에 도달한 유저가 없는 경우, 실패율은 0
        if(!map.has(i)) continue;
        
        let reachedStage = 0;
        for(const [stage, num] of map){
            if(stage >= i){
                reachedStage+= num;
            }
        }
        
        failure[i] = map.get(i) / reachedStage;    
    }
    
    // 0번째 요소 제거
    failure.shift();
    failure = failure.map((el, idx) => [idx+1, el]).sort((a,b) => b[1] - a[1]);
    
    return failure.map((el) => el[0]);   
}