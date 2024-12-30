function solution(maps) {
    let n = maps.length; //행의 크기
    let m = maps[0].length; //열의 크기
    const dir = [[-1,0], [1,0], [0,-1], [0,1]]; //움직일 수 있는 방향
    
    const bfs = () => {
        let queue = [[0,0,1]]; //행, 열, 이동거리 순
        maps[0][0] = 0; //이동한 거리 0으로 막기
        
        while(queue.length > 0){
            let [row, col, distance] = queue.shift();
            
            // row와 col이 도착지점에 도착하면 움직인 거리 리턴
            if(row === n-1 && col === m-1) return distance;
            
            
            //상하좌우 모두 탐색
            for(let [r,c] of dir){
                let newRow = row+r;
                let newCol = col+c;
                
                /**
                체크 조건
                1. map 내부에 있는지 (newRow >=0 && newCol >= 0 && newRow < n && newCol < m)
                2. 이동 가능한 부분인지 maps[newRow][newCol] === 1
                */
                if(newRow >= 0 && newRow < n && newCol >= 0 && newCol< m && maps[newRow][newCol] === 1){
                    queue.push([newRow,newCol, distance+1]);
                    maps[newRow][newCol] = 0;
                }
            }
        }
        return -1;
    }
    return bfs();
}