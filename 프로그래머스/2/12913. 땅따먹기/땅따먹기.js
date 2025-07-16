/**
풀이 방법
1행부터 내려오면서 누적 합 구하기
-> 연속되지 않은 열들 중 최대값 구해서 더하기
*/
function solution(land) {
    let lastRow = land.length -1;
    
    for(let i = 0 ; i< lastRow ;i++){
        land[i+1][0] += Math.max(land[i][1],land[i][2],land[i][3]);
        land[i+1][1] += Math.max(land[i][0],land[i][2],land[i][3]);
        land[i+1][2] += Math.max(land[i][0],land[i][1],land[i][3]);
        land[i+1][3] += Math.max(land[i][0],land[i][1],land[i][2]);
    }
    
    return Math.max(...land[lastRow]);
}