/**
[]에 [fromx, fromy, tox, toy], [tox, toy, fromx, fromy] 저장하기
-> 방향이 정해져있지 않기 때문에 이미 지나간 길임을 알기 위해서는 두가지 다 저장 필요

좌표 평면의 범위를 넘어가는 명령어는 무시 (continue)
*/

/** 좌표 평면 내에 위치하는지 확인하는 함수 */
function checkPos(pos){
    const [x,y] = pos;
    if(x >= -5 && y >= -5 && x <= 5 && y <= 5) return true;
    
    return false;
}

function getNewPos(pos, dir) {
    let [x,y] = pos;
    
    switch(dir){
        case 'U':
            y++;
            break;
        case 'D':
            y--;
            break;
        case 'R':
            x++;
            break;
        case 'L':
            x--;
            break;
    }
    return [x,y];
}

function isExistRoute(r1, r2, arr){
    return arr.some(route => route === r1 || route === r2);
}

function solution(dirs) {
    let cur = [0,0];
    let len = 0;
    const route = [];
    
    for(const dir of dirs){
        const newPos = getNewPos(cur, dir);
        
        // 좌표 평면 범위를 넘어가는 경우 패스
        if(!checkPos(newPos)) {
            continue;
        }
        
        const route1 = cur.join('') + newPos.join('');
        const route2 = newPos.join('') + cur.join('');
    
        if(!isExistRoute(route1, route2, route)){
            route.push(route1, route2);
            len++;
        }
        // 겹치는 루트가 있더라도 일단 움직이고 len 증가X
        cur = newPos;
    }
    
    return len;
}