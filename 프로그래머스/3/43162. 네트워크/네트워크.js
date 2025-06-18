function solution(n, computers) {
    const visited = Array.from({length: n}, () => false);
    
    const findNetwork = (node) => {
        visited[node] = true;
        
        for(let i = 0; i < n ; i++){
            if(computers[node][i] === 1 && !visited[i]) findNetwork(i);
        }
    }
    
    let network = 0;
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            findNetwork(i);
            network++;
        }
    }
    
    return network;
}