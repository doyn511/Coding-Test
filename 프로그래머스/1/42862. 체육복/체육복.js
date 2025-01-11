/** 풀이 방법
1. lost, reserve 중복값 없애기 (도난당했지만 여벌이 있는 경우)
// 정렬하기 (lost, reserve 모두)
2. answer = n - realLost.length (전체 학생수 - 실제 잃어버린 사람 수)
3. realLost에 있는 학생 앞 뒤의 학생이 realReserve에 있는지 확인 
4. 있다면 realReserve에 있는 해당 학생 빼고 필터링해서 새 배열 반환 + realLost에 있는 값 없애기*/
function solution(n, lost, reserve) {
   let realLost = lost.filter((std) => !reserve.includes(std)).sort((a,b) => a-b);
    let realReserve = reserve.filter((std) => !lost.includes(std)).sort((a,b) => a-b);
    
    let answer = n - realLost.length;
    
    for(const std of realLost){
        if(realReserve.includes(std-1)){
            realReserve = realReserve.filter((r) => r !== std-1);
            answer++;
        }else if(realReserve.includes(std+1)){
            realReserve = realReserve.filter((r) => r !== std+1);
            answer++;
        }
    }
    
    return answer;
}