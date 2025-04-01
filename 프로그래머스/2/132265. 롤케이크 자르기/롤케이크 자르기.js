/**
    기존의 토핑을 형에게 모두 주고 시작
    탐색하면서 형의 케이크에서 제거 -> 동생 케이크에 추가
    만약 a1.size === a2.size이면 방법의 수 ++
*/

function solution(topping) {
    const a1 = new Map(); // 형의 케이크
    const a2 = new Set(); // 동생의 케이크

    let answer = 0;
    
    for(let i = 0 ; i < topping.length; i++){
        if(a1.has(topping[i])){
            a1.set(topping[i], a1.get(topping[i])+1);
        }else{
            a1.set(topping[i], 1);
        }
    }
    
    for(let j = 0 ; j < topping.length; j++){
        a1.set(topping[j], a1.get(topping[j])-1);
        a2.add(topping[j]);
        
        if(a1.get(topping[j]) === 0) a1.delete(topping[j]);
        
        if(a1.size === a2.size) answer++;
    }
    
    return answer;
}