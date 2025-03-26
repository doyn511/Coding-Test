function solution(n, left, right) {
    const answer = [];
    
    for(let i = left; i <= right; i++){
        const s = Math.floor(i/n);
        const r = i % n;
        answer.push(Math.max(s,r) + 1);
    }
    return answer;
}