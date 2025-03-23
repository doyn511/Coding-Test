function solution(n, arr1, arr2) {
    const answer = [];
    
    for(let i = 0; i < n; i++){
        let str = '';
        const a = arr1[i].toString(2).padStart(n, 0);
        const b = arr2[i].toString(2).padStart(n, 0);
        
        for(let j = 0 ; j < n; j++){
            if(a[j] == 1 || b[j] == 1){
                str += '#';
            }else{
                str += ' ';
            }
        }
        answer.push(str);
    }
    return answer;
}