function solution(n){
    let position = n;
    let k = 0;
    
    while(position !== 0){
        if(position % 2 === 0){
            position = position / 2;
        }else{
            position--;
            k++;
        }
    }
    
    return k;
}