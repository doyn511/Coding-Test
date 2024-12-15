function solution(numbers) {
    const answer = [];
    for(let i = 0; i <= numbers.length-1; i++){
        for(let j = i+1; j<= numbers.length-1; j++){
            const sum = numbers[i] + numbers[j];
            !answer.includes(sum) && answer.push(sum);
        }
    }
    return answer.sort((a,b) => a-b);
}