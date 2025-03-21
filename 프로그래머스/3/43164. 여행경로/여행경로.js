function solution(tickets) {
    tickets.sort();
    const visited = Array.from({length: tickets}, () => false);
    const len = tickets.length;
    const answer = [];
    
    
    // dfs 활용
    const findRoute = (str, count) => {
        answer.push(str);
        
        if(count === len) return true;
        
        for(let i = 0; i < len; i++){
            const [from, to] = tickets[i];
            
            if(str === from && !visited[i]){
                visited[i] = true;
                
                if(findRoute(to, count+1)){
                    return true;
                }else{
                    // ICN에서 알파벳 순서가 빠른 것부터 선택했지만 모든 항공권을 사용하지 못할 때
                    visited[i] = false;
                    answer.pop();
                }
            }
        }
        return false;
    }
        
    findRoute('ICN',0); 
    return answer;
}