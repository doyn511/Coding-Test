/**
n편 중 h번 이상 인용된 논문이 h편 이상 / 나머지 논문은 h편 이하로 인용
-> h의 최대값이 H-index값
*/
function solution(citations) {
    let index = 0;
    let hIndex = 0;
    const max = Math.max(...citations);
    
    while(index <= max){
        const count = citations.filter((el) => el >= index).length;
        if(count >= index) hIndex = index;
        index++;
    }
    return hIndex;
}