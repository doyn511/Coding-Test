function solution(clothes) {
    const clothMap = new Map();
    let answer = 1;
    
    clothes.forEach((el) => {
        const [name, type] = el;
        if(clothMap.has(type)){
            clothMap.set(type, clothMap.get(type)+1)

        }else{
            clothMap.set(type, 1);
        }
    })
    
    // 각각의 옷을 입음 or 안입음 두가지 방안만이 존재함
    clothMap.forEach((count) => answer *= (count+1));
    
    // 하나도 입지 않는 경우 제외하고 리턴
    return answer - 1;
    
}