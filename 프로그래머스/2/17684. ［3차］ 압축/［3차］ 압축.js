function solution(msg) {
    const answer = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const indexMap = new Map();
    
    // 사전 초기화
    for(let i = 0 ; i < 26; i++){
        indexMap.set(alphabet[i], i+1);
    }
    
    // 대문자만 취급하는 사전이므로 입력도 대문자로 비교
    msg = msg.toUpperCase();
    
    let idx = 0;
    while(idx < msg.length){
        let cur = msg[idx];
        
        // 가장 긴 문자열 찾기 (사전에 존재하는)
        while(idx + cur.length < msg.length && indexMap.has(cur + msg[idx + cur.length])){
            cur += msg[idx + cur.length];
        }
        
        answer.push(indexMap.get(cur));
        
        if(idx + cur.length < msg.length) {
            const newStr = cur + msg[idx + cur.length];
            indexMap.set(newStr, indexMap.size+1);
        }
        
        idx += cur.length;   
    }
    
    return answer;
}