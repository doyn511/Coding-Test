function solution(maps) {
    const xLen = maps.length;
    const yLen = maps[0].length;
    const dir = [[0,1], [0,-1], [1,0], [-1,0]]; // 움직일 수 있는 방향
    
    const bfs = (startX, startY) => {
        let queue = [[startX, startY, 1]];
        maps[startX][startY] = 0;
        
        while(queue.length >0){
            let [x, y, dist] = queue.shift();
            
            if(x === xLen-1 && y === yLen-1) return dist;
            
            for(const [r,c] of dir){
                const newX = x+r;
                const newY = y+c;
                
                if(newX >= 0 && newX < xLen && newY >= 0 && newY < yLen && maps[newX][newY] === 1){
                    maps[newX][newY] = 0;
                    queue.push([newX, newY, dist+1]);
                }
            }
        }
        return -1;
    }
     return bfs(0,0);
}