function solution(numbers, target) {
    let answer = 0;
    
    const findTarget = (sum, dep) => {
        if(dep === numbers.length){
            if(sum === target) answer++;
            return ;
        }
        
        findTarget(sum+numbers[dep], dep+1);
        findTarget(sum-numbers[dep], dep+1);
    }
    
    findTarget(0, 0);
    
    return answer;
}