function solution(number) {    
    let result = 0;
    
    const combination = (cur, start) => {
        if(cur.length === 3){
            result += cur.reduce((acc,cur) => acc+cur,0) === 0 ? 1 : 0;
            return;
        }
        
        for(let i = start; i < number.length; i++){
            combination([...cur, number[i]], i+1);
        }
    }
    combination([],0);
    return result;
}