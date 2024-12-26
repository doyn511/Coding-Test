function solution(numbers) {
    const num = numbers.split('');
    let answer = new Set();
    
    const isPrimeNumber = (n) => {
        if(n <= 1) return false;
        if(n === 2) return true;
        
        for(let i = 2; i*i <= n ; i++){
            if(n % i === 0) return false;
        }
        return true;
    }
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1){
            for(let i = 0; i < arr.length; i++){
                const newFixed = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if(isPrimeNumber(+newFixed)){
                    answer.add(+newFixed);
                }
                
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(num, '');
    console.log(answer);
    return answer.size;
}