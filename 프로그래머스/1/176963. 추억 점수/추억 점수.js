function solution(name, yearning, photo) {
    const answer = [];
    
    for(const p of photo) {
        let score = 0;
        for(const person of p) {
            let idx = name.indexOf(person);
            if(idx === -1){
                continue;
            }
            score += yearning[idx];
        }
        answer.push(score);
    }
    return answer;
}