/**
i부터 j번째까지 자르기 -> 오름차순 정리 후 k번째 숫자 리턴
*/

function solution(array, commands) {
    const answer = [];
    commands.forEach(([i, j, k]) => {
        let arr = [...array];
        arr = arr.slice(i-1, j).sort((a,b) => a-b);
        answer.push(arr[k-1]);
    })
    
    return answer;
}