function solution(new_id) {
    let answer = '';
    
    const checkPeriod = (id) => {
        if(id.startsWith('.')){
            id = id.slice(1);
        }
        
        if(id.endsWith('.')){
            id = id.slice(0, -1);
        }
        return id;
    }
    
    
    // 1. 소문자 치환, 숫자/알파벳/가능한 특수문자 외 제외
    answer = new_id.toLowerCase().replace(/[^a-zA-Z0-9_.-]/g, '');
    
    // 2 '.'가 두번 이상 연속되면 하나 제거
    answer = answer.replace(/\.{2,}/g, '.');
    
    // 3. .으로 시작하거나 끝나는지 체크
    answer = checkPeriod(answer);
    
    // 4. 빈 문자열일 경우, 'a' 대입
    if(answer.length === 0) answer = 'a';
    
    // 5. 16자가 넘은 경우, 15자 까지만
    if(answer.length > 15) answer = answer.slice(0, 15);
    
    // 6. .으로 끝난다면 제거
    answer = checkPeriod(answer);
    
    if(answer.length < 3){
        let last = answer[answer.length-1];
        answer += last.repeat(3 - answer.length);
    }
    
    return answer;
}