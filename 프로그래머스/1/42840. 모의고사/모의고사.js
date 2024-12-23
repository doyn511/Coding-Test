function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    const firstLen = first.length;
    const secondLen = second.length;
    const thirdLen = third.length;
    
    let score = [{id:1, cnt:0}, {id:2, cnt:0}, {id:3, cnt:0}];
    
    for(let i = 0; i <= answers.length-1; i++){
        if(answers[i] === first[ i % firstLen]) score[0].cnt++;
        if(answers[i] === second[ i % secondLen]) score[1].cnt++;
        if(answers[i] === third[ i % thirdLen]) score[2].cnt++;
    }
    
    const maxScore = Math.max(score[0].cnt, score[1].cnt, score[2].cnt);
    let answer = score.filter((item) => {
        if(item.cnt === maxScore){
            return item.id
        }
    }).map((item) => item.id);
    
    return answer;
}