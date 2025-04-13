function solution(N, stages) {
    // 1부터 N까지의 실패율을 담은 배열
    const failure = [];
    
    for(let i = 1; i <= N; i++){
        const success = stages.filter((el) => el >= i).length;
        const challenge = stages.filter((el) => el === i).length;
        
        failure.push([i, challenge/success]);
    }
    failure.sort((a,b) => b[1]-a[1]);
    return failure.map((el) => el[0]);
}