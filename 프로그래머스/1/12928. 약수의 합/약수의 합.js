function solution(n) {
    let idx = 1;
    let sum = 0;
    
    while(idx <= n/2){
        if(n % idx === 0){
            sum+= idx;
        }
        idx ++;
    }
    
    sum+= n;
    return sum;
}