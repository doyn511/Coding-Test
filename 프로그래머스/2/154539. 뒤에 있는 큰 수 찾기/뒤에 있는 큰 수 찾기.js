function solution(numbers) {
    const answer = [];
    let stack = [];
    let maxNum = 0;
    
    for(let i = numbers.length-1; i >= 0; i--){
        // max가 max가 아닐 경우
        if(numbers[i] >= maxNum){
            maxNum = numbers[i]; // 현재 수가 가장 큰 수
            answer.push(-1); // 자신보다 큰 수가 없으므로 -1 푸시
            stack = []; // stack 초기화
            stack.push(numbers[i]);
        }else { // maxNum이 제일 큰 값일 경우
            while(1){
                if(numbers[i] < stack[0]){
                    answer.push(stack[0]);
                    stack.unshift(numbers[i]);
                    break;
                }else{
                    stack.shift();
                }
            }
        }
    }
    
    return answer.reverse();
}