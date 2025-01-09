// 풀이 방법 : 무거운것 + 가벼운 것 짝지어서 태우기
function solution(people, limit) {
    let boat = 0;
    people.sort((a,b) => a-b);
    
    while(people.length !== 0){
        if(people[0] + people[people.length-1] <= limit){
            people.shift();
            people.pop();
            boat++;
        }else{
            people.pop();
            boat++;
        }
    }
    return boat;
}