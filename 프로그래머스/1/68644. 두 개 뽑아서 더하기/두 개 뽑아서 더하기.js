function solution(numbers) {
    const answer = [];
    
    for(let i = 0; i < numbers.length-1; i++){
        let fixed = numbers[i];
        
        for(let j = i+1; j < numbers.length; j++){
            if(!answer.includes(fixed + numbers[j])){
                answer.push(fixed + numbers[j]);
            }
        }
    }
    
    return answer.sort((a,b) => a-b);
}