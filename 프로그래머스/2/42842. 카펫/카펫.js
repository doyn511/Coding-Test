/**
col : 가로 줄 수
row : 세로 줄 수
1. brwon의 수에서 4개 제외 (brwon - 4)
2. yellow를 1줄 ~ n줄로 놨을 때 순차적으로 체크
    col, row 업데이트 (row : i + 2 / col : (yellow / i) + 2)
    a. brwon -= 가로 양 옆 (n * 2)
    b. brwon / 2 가 yellow의 수와 같으면 break
        같지 않다면 continue
*/
function solution(brown, yellow) {
    brown -= 4; // 양 끝 모서리 4개 빼기
    
    const combination = [];
    
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow % i === 0){
            combination.push([yellow/i, i]);
        }
    }
    
    for(const [c,r] of combination){
        if(c * 2 + r * 2 === brown) return [c+2, r+2];
    }
    


}