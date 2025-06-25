/**
1. 기존 문자, 기존 문자 개수 저장 배열 생성 ['문자', 개수]
2. 다른 문자 개수 저장 변수, 나눠진 문자열 개수 저장 변수 생성
*/
function solution(s) {
    s = s.split('');
    const curX = [s[0], 1];
    let diffCnt = 0;
    let splitStr = 0;
    
    for(let i = 1; i < s.length-1; i++){
        if(curX[0] !== s[i]){
            diffCnt++;
        }else{
            curX[1]++;
        }
        
        if(curX[1] === diffCnt){
            splitStr++;
            
            // 변수 초기화
            curX[0] = s[i+1];
            curX[1] = 1;
            diffCnt = 0;
            i++;
        }
    }
    
    return splitStr+1;
}