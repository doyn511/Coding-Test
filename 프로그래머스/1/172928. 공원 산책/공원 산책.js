function solution(park, routes) {
    const maxY = park.length-1;
    const maxX = park[0].length-1;
    
    // 시작 지점 찾는 함수
    const findStartIndex = () => {
        let [x,y] = [0,0];
        for(const [index, item] of park.entries()){
            if(item.includes('S')){
                y = index;
                x = item.indexOf('S');
            }
        }
        return [x,y];
    }
    
    const checkIsValidRoute = (dir, curX, curY, newX, newY) => {
        let isValid = true;
        
        if(dir === 'N'){
            for(let i = newY; i <= curY; i++){
                if(park[i][curX] === 'X'){
                    isValid = false;
                    break;
                }
            }
        }
        
        if(dir === 'S'){
            for(let i = curY; i <= newY ; i++){
                if(park[i][curX] === 'X'){
                    isValid = false;
                    break;
                }
            }
        }
        
        if(dir === 'W'){
            for(let i = newX; i <= curX; i++){
                if(park[curY][i] === 'X'){
                    isValid = false;
                    break;
                }
            }
        }
        
        if(dir === 'E'){
            for(let i = curX ; i <= newX; i++){
                if(park[curY][i] === 'X'){
                    isValid = false;
                    break;
                }
            }
        }
        
        return isValid;
    }
    
    let pos = findStartIndex();
    console.log(pos)
    
    for(let route of routes){
        const [dir, cnt] = route.split(' ');
        let newX = pos[0];
        let newY = pos[1];
        
        if(dir === 'N') newY -= Number(cnt);
        if(dir === 'S') newY += Number(cnt);
        if(dir === 'W') newX -= Number(cnt);
        if(dir === 'E') newX += Number(cnt);
        
        if(newX < 0 || newX > maxX || newY < 0 || newY > maxY){
            // 범위 out -> 명령어 무시하기
            continue;
        }
        
        if(checkIsValidRoute(dir, pos[0], pos[1], newX, newY)){
            pos = [newX, newY];
        }
    }
    
    //return 값의 순서: [세로 방향 좌표, 가로 방향 좌표]
    return [pos[1], pos[0]];
}