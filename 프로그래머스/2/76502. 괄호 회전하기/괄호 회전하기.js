function checkPairs (arr) {
    const stack = [];
    stack.push(arr[0]);
        
    for(let i = 1; i < arr.length; i++){
        if(stack[stack.length-1] === '(' && arr[i] === ')'){
            stack.pop();
        }else if(stack[stack.length-1] === '{' && arr[i] === '}'){
            stack.pop();
        }else if(stack[stack.length-1] === '[' && arr[i] === ']'){
            stack.pop();
        }else{
            stack.push(arr[i]);
        }
    }
        
    return stack.length === 0 ? true : false;
}

function solution(s) {
    const copyS = s.split('');
    const answer = [];
    
    for(let i = 0; i < s.length; i++){
        answer.push(checkPairs(copyS));
        
        let tmp = copyS.shift();
        copyS.push(tmp);
    }
    
    return answer.filter((el) => el).length;
    
}