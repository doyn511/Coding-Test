/**
n진법 변환 -> 숫자.toString(n)
*/
function solution(n, t, m, p) {
    let num = [];
    for(let i = 0; i < t*m; i++){
        num.push(i.toString(n).toUpperCase());
    }
    num = num.join('');

    let answer = '';
    let turn = 1;

    for(let i = p; i <= num.length; i += m){
        answer += num[i-1];
        
        if(answer.length === t) break;
    }
    return answer;
}