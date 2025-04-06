/**
에라토스테네의 체 이용

1. 2부터 N까지의 배열 생성
2. Math.sqrt(N)까지 돌며 자기 자신을 제외한 배수 제거
*/
function solution(n) {
    const arr = Array.from({length: n+1}, (_,idx) => idx);
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(arr[i] === 0) continue;
        
        for(let j = i+i; j <= n; j = j + i){
            arr[j] = 0;
        }
    }
    
    // 0 제외
    return arr.filter((el) => el !== 0).length -1;

}