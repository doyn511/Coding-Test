function solution(N, stages) {
    // 1부터 N까지의 실패율을 담은 배열
    let failure = new Map();
    
    for(let i = 1; i <= N; i++){
        const success = stages.filter((el) => el >= i).length;
        const challenge = stages.filter((el) => el === i).length;
        
        failure.set(i, challenge/success);
    }
    failure = [...failure];
    
    const answer = failure.sort((a,b) => b[1]-a[1]).map(el => el[0]);
    return answer;
}