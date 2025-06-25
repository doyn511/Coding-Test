function solution(X, Y) {
    let answer = '';
    const pairs = [];
    
    const yMap = new Map();
    for(let i = 0; i < Y.length; i++){
        if(yMap.has(Y[i])){
            yMap.set(Y[i], yMap.get(Y[i])+1);
        }else{
            yMap.set(Y[i], 1);
        }
    }
    
    for(let i = 0; i < X.length; i++){
        if(yMap.has(X[i])){
            if(yMap.get(X[i]) > 0){
                pairs.push(X[i]);
            }
            yMap.set(X[i], yMap.get(X[i])-1);
        }
    }
    
    if(pairs.length === 0){
        answer = '-1';
    }else{
        if(pairs.filter((num) => num != 0).length === 0){
            answer = '0';
        }else{
            answer = pairs.sort((a,b) => b-a).join('');
        }
    }
    
    return answer;
}