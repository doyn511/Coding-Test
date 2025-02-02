function solution(k, tangerine) {
    const map = new Map();
    let answer = 0;
    let cnt = 0;
    
    tangerine.forEach(t => {
        map.set(t, map.has(t) ? map.get(t)+1 : 1);
    });
    
    const arr = [...map].sort((a,b) => b[1] - a[1]);
    
    for(let i = 0 ; i <  arr.length; i++){
        cnt += arr[i][1];
        answer++;
        
        if(cnt >= k) break;
    }
    
    return answer;
}
   