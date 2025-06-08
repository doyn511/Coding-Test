/**풀이 방법
dirs 순차적으로 돌면서 체크하기
- 0. 새로 방문하려는 좌표가 좌표평면의 경계 안에 존재하는지 체크 (존재하지 않는다면 바로 continue)
- 1. from, to / to, from 순으로 모두 visited에 이미 존재하는지 확인하기
- 2. 존재하지 않는다면 ways++
- 3. 현재 좌표 업데이트
*/ 
function solution(dirs) {
    const visited = new Set();
    let ways = 0;
    let cur = [0,0];
    

    for(const d of dirs){
        let newX = cur[0], newY = cur[1];
        
        // 새 좌표 구하기
        if(d === 'U') newY += 1;
        if(d === 'D') newY -= 1;
        if(d === 'R') newX += 1;
        if(d === 'L') newX -= 1;
        
        // 좌표 평면 내에 존재하는지 확인
        if(newX < -5 || newX > 5 || newY < -5 || newY > 5){
            continue;
        }
        
        // 이미 방문한 루트인지 확인
        if(!visited.has([...cur, newX, newY].join('')) && !visited.has([newX, newY, ...cur].join(''))) ways++;
        
        visited.add([...cur, newX, newY].join(''));
        visited.add([newX, newY, ...cur].join(''));
        
        cur = [newX, newY];
    }
    
    return ways;
}