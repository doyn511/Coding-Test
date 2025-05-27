function solution(s) {
    const answer = [];
    const numberCount = new Map();
    const sArr = [];
    s = s.split('{').join(('')).split('}');
    
    for(let str of s){
        str = str.split(',').filter(el => el!=='');
        
        for(const n of str){
            if(!isNaN(n)){
                if(!numberCount.has(+n)){
                    numberCount.set(+n, 1);
                }else{
                    numberCount.set(+n, numberCount.get(+n)+1);
                }
            }
        }
    }
    
    const arr = [...numberCount.entries()].sort((a,b) => b[1]-a[1]);
    return arr.map((el) => el[0]);
}