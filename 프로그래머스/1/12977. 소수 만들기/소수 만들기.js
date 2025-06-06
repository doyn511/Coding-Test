function checkIsPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
    
}
function solution(nums) {
    nums.sort((a,b) => a-b);
    
    const getCombinations = (arr, n) => {
        if(n === 1) return arr.map((num) => [num]);
        const res = [];
        
        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx+1);
            const combis = getCombinations(rest, n-1);
            const attatched = combis.map((arr) => [fixed, ...arr]);
            res.push(...attatched);
        })
        return res
    }
    
    const combinations = getCombinations(nums, 3);
    let answer = 0;
    
    combinations.forEach((numArr) => {
        const sum = numArr[0] + numArr[1] + numArr[2];
        if(checkIsPrime(sum)) answer++;
    })
    
    return answer;
}