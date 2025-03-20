function solution(clothes) {
    const clothesType = {};
    let answer = 1;
    
    for(let i = 0; i < clothes.length; i++){
        clothesType[clothes[i][1]] = (clothesType[clothes[i][1]] || 0) + 1;
    }
    
    for(const c in clothesType){
        answer *= (clothesType[c] + 1);
    }
    
    return answer-1;
}
