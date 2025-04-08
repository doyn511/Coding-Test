/**
자카드 유사도 = 교집합의 크기 / 합집합의 크기
모두 공집합인 경우 -> J(A,B) = 1

다중집합 자카드 유사도
중복값은 교집합에서는 min값 / 합집합에서는 max값

1. 두 글자씩 끊어서 다중집합의 원소로 만들기
2. 공백/특수문자가 들어있는 경우는 다중 원소에서 버림 (일단 만든 뒤 버림)
3. 대소문자 차이는 무시
4. 두 문자열의 자카드 유사도 출력 (0~1사이의 실수)

출력 형식
구한 유사도 * 65536 후 소숫점 아래 버리기
*/

function makeStrMap (str) {
    const map = new Map();
    const isAlpha = /[a-zA-Z]/;
    
    for(let i = 0; i < str.length-1; i++){
        if(isAlpha.test(str[i]) && isAlpha.test(str[i+1])){
            map.has(str[i]+str[i+1]) ? map.set(str[i]+str[i+1],map.get(str[i]+str[i+1])+1) : map.set(str[i]+ str[i+1], 1);
        }
    }
    
    return map;
}

function solution(str1, str2) {
    let jaccard = 0;
    let intersection = 0;
    let union = 0;
    
    const map1 = makeStrMap(str1.toLowerCase());
    const map2 = makeStrMap(str2.toLowerCase());
    
    // 모두 공집합인 경우 자카드 유사도는 1
    if(map1.size === 0 && map2.size === 0){
        jaccard = 1;
        return Math.floor(jaccard * 65536);
    }
    
    // 모두 공집합이 아닐 경우, 교집합 구하기
    for(const [key, value] of map1){
        if(map2.has(key)){
            intersection += Math.min(value, map2.get(key));
        }
    }
    
    let unionMap = new Map(map1);
    for(const [key, value] of map2){
        // 이미 존재하는 값이라면 max값인지 체크하고 업데이트
        if(unionMap.has(key)){
            const cur = unionMap.get(key);
            if(Math.max(cur, value) === cur){
                // 만약 unionMap에 있는 값이 큰 값이라면 계속 진행
                continue;
            }else{
                // unionMap에 있는 값이 작은 값이라면 값 업데이트
                unionMap.set(key, value);
            }
        }else{
            // 없는 값이라면 값 추가하기
            unionMap.set(key, value);
        }
    }
    // unionMap의 value값들 전부 더한 값이 union값
    unionMap.forEach((el) => union+= el);
    
    jaccard = intersection / union;
    
    // 65536을 곱한 뒤 정수부만 리턴
    return Math.floor(jaccard * 65536);
}