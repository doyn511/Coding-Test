function solution(n, computers) {
    let network = 0;
    const visited = Array.from({length: n}, () => false);

    const dfs = (node) => {
        visited[node] = true;
        for(let i = 0; i < n; i++){
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    for(let i = 0 ; i < n; i++){
        if(!visited[i]){
            dfs(i);
            network++;
        }   
    }
    return network;
}