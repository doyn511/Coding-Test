function solution(want, number, discount) {
    let day = 0;
    
    const map = new Map();
    want.forEach((el, idx) => map.set(el, number[idx]));
    
    const isMatch = (arr) => {
        for(const [product, num] of arr){
            if(!map.has(product) || num > 0){
                return false;
            }
        }
        return true;
    }
    
    for(let start = 0; start <= discount.length - 10; start++){
        let curMap = new Map(map);
        
        for(let j = start; j < start+10; j++){
            if(curMap.has(discount[j])){
                curMap.set(discount[j], curMap.get(discount[j])-1);
            }else{
                break;
            }
        }
        const res = [...curMap.entries()];
        
        if(isMatch(res)){
            day++;
        }
    }
    
    return day;

}
