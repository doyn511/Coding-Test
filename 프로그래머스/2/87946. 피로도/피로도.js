/**
최대로 탐색해도 8!
*/
function solution(k, dungeons) {
    
    // 방문할 수 있는 던전의 순서 배열 구하기
    const getCombinations = (arr, n) => {
        if(n === 1) return arr.map((el) => [el]);
        
        const res = [];
        
        arr.forEach((fixed, idx, origin) => {
            const rest = origin.filter((el) => el !== fixed);
            const combis = getCombinations(rest, n-1);
            const attatched = combis.map((el) => [fixed, ...el]);
            res.push(...attatched);
        })
        return res;
    }
    
    const seq = getCombinations(dungeons, dungeons.length);
    let maximum = 0;
    
    seq.forEach((arr,idx) => {
        let curK = k;
        let stage = 0;
        
        for(const [mininum, spend] of arr){
            if(curK >= mininum){
                curK -= spend;
                stage++;
            }
        }
        maximum = Math.max(maximum, stage);        
    })
    
    return maximum;
}