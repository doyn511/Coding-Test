/** 접근 방법 
1. [priority, index]를 담은 배열 (processes)을 생성한다
2. priorities를 내림차순으로 정렬한다 -> 우선순위가 가장 큰게 무조건 앞에 있음
3. processes 맨 앞에서부터 현재 순서 프로세스의 priority가 maxPriority와 같은지 검사
    - 다르다면 맨 앞에걸 빼서 맨 뒤로 보냄
    - 같다면 찾아야하는 현재 순서의 index가 location의 값과 같은지 검사
        - 같다면 순서(count)++해주고 while문 빠져나오기
        - 다르다면 count++ 해주고 task 제거 / 현재 MaxPriority 제거
4. count 리턴하기
*/
function solution(priorities, location) {
    let count = 0;
    const processes = priorities.map((priority,idx) => [priority,idx]);
    priorities.sort((a,b) => b-a);
    
    while(true) {
        let maxPriority = priorities[0];
        let [priority, index] = processes[0];
        
        if(priority !== maxPriority){
            processes.push(processes.shift());
        }else{
            if(index === location){
                count++;
                break;
            }else{
                priorities.shift();
                processes.shift();
                count++;
                continue;
            }
        }
    }
        return count;
}