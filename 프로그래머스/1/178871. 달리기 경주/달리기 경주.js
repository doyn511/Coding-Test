/**
players -> 현재 등수
callings -> 추월한 선수의 이름 (등수가 더 앞서야됨)
구하는 값 -> 경주가 다 끝났을 때의 등수
*/
function solution(players, callings) {
    const answer = [...players];
    const playerMap = new Map();
    
    players.forEach((player, idx) => {
        playerMap.set(player, idx);
    })
    
    for(const call of callings){
        const ranking = playerMap.get(call);
        
        const p = answer[ranking-1];
        
        answer[ranking] = p;
        answer[ranking-1] = call;
        
        playerMap.set(call, ranking-1);
        playerMap.set(p, ranking);
    }
    
    return answer;
}