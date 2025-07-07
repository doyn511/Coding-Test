function solution(n, w, num) {
    let arr = Array.from({length: w}, () => []);
    
    let numIdx = [];
    for(let i = 0; i < n; i++){
        let idx = i % w;
        
        if(Math.floor(i/w) % 2 === 0) {
            arr[idx].push(i+1);
        }else{
            arr[w-idx-1].push(i+1);
        }
        
        if(num === i+1){
            if(Math.floor(i/w) % 2 === 0){
                numIdx = [idx, arr[idx].length-1];
            }else{
                numIdx = [w-idx-1, arr[w-idx-1].length-1];
            }
        }
    }
    
    return arr[numIdx[0]].length - numIdx[1];
}