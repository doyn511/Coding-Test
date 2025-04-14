// Lv 2. 올바른 괄호 - 스택/큐
function solution(s){
    const stack = [s[0]];
    
    for(let i = 1; i < s.length; i++){
        if(stack[stack.length-1] === '(' && s[i] === ')'){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0 ? true : false;
}