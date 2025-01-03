function solution(s){
    const stack = [];
    let answer = '0';
    
    for(let item of s){
        if(stack.length > 0 && item === stack[stack.length-1]){
            stack.pop();
        }else{
            stack.push(item);
        }
    }
    
    return stack.length === 0 ? 1 : 0;

}