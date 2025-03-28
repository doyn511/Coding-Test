function solution(arr1, arr2) {
    const answer = [];
    
    for(const a1 of arr1){
        const row = [];
        
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += a1[k] * arr2[k][j];
            }
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}