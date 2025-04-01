function solution(k, m, score) {
    const map = new Map();
    let price = 0;
    
    const boxCnt = Math.floor(score.length / m); // 최대로 나올 수 있는 박수 수
    score = score.sort((a,b)=> b-a).slice(0, (m*boxCnt));

    for(let i = m-1; i <= score.length; i+=m){
        price += score[i] * m;
    }
    
    return price;
}