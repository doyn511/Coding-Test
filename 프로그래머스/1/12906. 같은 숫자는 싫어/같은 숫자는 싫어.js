function solution(arr)
{
    const answer = [];
    
    for(const item of arr){
        if(answer[answer.length-1] !== item){
            answer.push(item);
        }
    }
    
    return answer;


}