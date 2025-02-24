function findFactors (n) {
    const factors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i  === 0){
            factors.push(i);
            if(n / i !== i) factors.push(n / i);
        }
    }
    
    return factors.length;
}

function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1; i <= number; i++){
        let res = findFactors(i);
        
        if(res <= limit) {
            answer += res;
        }else{
            answer += power;
        }
    }
    
    return answer;
}