function solution(array, commands) {
    const answer = [];
    
    commands.forEach((item) => {
        let [i, j, k] = item;
        let sliceArr = array.slice(i-1,j).sort((a,b) => a-b);
        answer.push(sliceArr[k-1]);
    })
    
    return answer;
}