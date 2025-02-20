function solution(n, edge) {
    const graph = Array.from({length: n+1}, () => []);
    
    // 1. 그래프 생성하기
    for(let i = 0 ; i < edge.length; i++){
        const [v1, v2] = edge[i];
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const bfs = () => {
        const queue = [1];
        const visited = Array.from({length: n+1}, () => false);
        visited[1] = 1;
        
        while(queue.length){  
            const cur = queue.shift();
            
            for(const next of graph[cur]){
                if(visited[next] === false){
                visited[next] = visited[cur]+1;
                queue.push(next);
                }   
            }
        }
        return visited;
    }
    
    const visited = bfs();
    const max = Math.max(...visited);
    return visited.filter((el) => el === max).length;
}