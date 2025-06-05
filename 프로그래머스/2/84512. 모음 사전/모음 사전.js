function solution(word) {
    const wordsArr = ['A', 'E', 'I', 'O', 'U'];
    const words = [];
    
    const getCombinations = (arr, n) => {
        if(n === 1) return arr.map((el) => [el]);
        const result = [];
        
        arr.forEach((fixed, idx, origin) => {
            const combis = getCombinations(origin, n-1);
            const attatched = combis.map((num) => [fixed, ...num]);
            result.push(...attatched);
        })
        return result;
    }
    
    for(let i = 1; i <= 5; i++){
        const combisRes = getCombinations(wordsArr, i);
        combisRes.forEach((el) => words.push(el.join('')));
    }
    
    return words.sort().indexOf(word)+1;
}