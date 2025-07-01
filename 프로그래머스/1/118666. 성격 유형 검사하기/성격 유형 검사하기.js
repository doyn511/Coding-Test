function solution(survey, choices) {
    let answer = '';
    let typeScore = {R:0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N : 0};
    
    const findScore = (choice) => {
        if(choice === 1 || choice === 7) return 3;
        if(choice === 2 || choice === 6) return 2;
        if(choice === 3 || choice === 5) return 1;
        
        return 0;
    }
    
    choices.forEach((c, idx) => {
        let score = findScore(c);
        
        if(c < 4){
            typeScore[survey[idx][0]] += score;
        }else if(c > 4){
            typeScore[survey[idx][1]] += score;
        }
    })
    
    
    typeScore = Object.entries(typeScore);
    for(let i = 0; i < 8; i+=2){
        if(typeScore[i][1] > typeScore[i+1][1]){
            answer += typeScore[i][0];
        }else if(typeScore[i][1] < typeScore[i+1][1]){
            answer+=typeScore[i+1][0];
        }else{
            answer+= typeScore[i][0] < typeScore[i+1][0] ? typeScore[i][0] : typeScore[i+1][0];
        }
    }
    
    return answer;
}