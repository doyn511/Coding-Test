function solution(arr1, arr2) {
    const answer = [];
    
    for(let i = 0; i <= arr1.length-1; i++){
        const sum = [];
        for(let j = 0; j <= arr1[i].length-1; j++){
            sum.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(sum);
    }
    return answer;
}