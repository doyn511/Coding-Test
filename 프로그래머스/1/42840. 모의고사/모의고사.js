function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    let score = [{id:1, cnt:0}, {id:2, cnt:0}, {id:3, cnt:0}];
    
    let curIdx = 0;
    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = 0;
    
    while(curIdx !== answers.length){
        if(answers[curIdx] === first[firstIdx]){
            score[0].cnt++;
        }
        if(answers[curIdx] === second[secondIdx]){
            score[1].cnt++;
        }
        if(answers[curIdx] === third[thirdIdx]){
            score[2].cnt++;
        }
        
        firstIdx++; secondIdx++; thirdIdx++; curIdx++;
        
        if(firstIdx >= first.length){
            firstIdx = firstIdx-first.length;
        }
        if(secondIdx >= second.length){
            secondIdx = secondIdx-second.length;
        }
        if(thirdIdx >= third.length){
            thirdIdx = thirdIdx-third.length;
        }
    }
    
    const maxScore = Math.max(score[0].cnt, score[1].cnt, score[2].cnt);
    let answer = score.filter((item) => {
        if(item.cnt === maxScore){
            return item.id
        }
    }).map((item) => item.id);
    
    return answer;
}