function solution(n, k) {
    const nTok = n.toString(k).split(0);
    const prime = [];
    
    const checkIsPrime = (num) => {
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) isPrime = false;
        }
        return isPrime;
    }
    
    for(const num of nTok){
        if(+num <= 1) continue;
        
        if(prime.includes(+num)){
            prime.push(+num);
            continue;
        }else{
            if(checkIsPrime(+num)) prime.push(+num);
        }
    }
    return prime.length;
}