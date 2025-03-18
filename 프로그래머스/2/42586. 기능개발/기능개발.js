/**
각 배포는 순서대로 진행되어야함 (뒤에꺼가 먼저 완성되어도 먼저 배포 불가능)

구하는 것 : 각 배포마다 몇 개의 기능이 배포되는가

*/
function solution(progresses, speeds) {
    const answer = [];
    
    while(progresses.length > 0){
        let count = 0;
        for(let i = 0 ; i < progresses.length; i++){
            if(progresses[i] < 100){
                progresses[i] += speeds[i];
            }
        }
        
        while(true){
            if(progresses[0] >= 100){
                progresses.shift();
                speeds.shift();
                count++;
            }else{
                break;
            }
        }
        
        if(count > 0) answer.push(count);
    }
    
    return answer;
}