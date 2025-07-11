function solution(friends, gifts) {
    const giveGiftMap = new Map();
    const getGiftMap = new Map();
    const giftPercent = new Map();
    const nextMonthGetCnt = new Map();
    
    // map 초기화
    friends.forEach((name) => {
        giveGiftMap.set(name, []);
        getGiftMap.set(name, []);
        nextMonthGetCnt.set(name, 0);
    })
    
    // 주고 받은 내역 계산
    gifts.forEach((str) => {
        const [give, get] = str.split(' ');
        
        const giveP = giveGiftMap.get(give);
        const getP = getGiftMap.get(get);
        giveP.push(get);
        getP.push(give);
    });
    
    // 선물지수 계산
    friends.forEach((name) => {
        giftPercent.set(name, giveGiftMap.get(name).length - getGiftMap.get(name).length);
    })
    
    // 다음 달 받을 선물의 수 계산
    for(let i = 0; i < friends.length; i++){
        for(let j = i+1; j < friends.length; j++){
            const p1 = friends[i];
            const p2 = friends[j];
            const p1_p2 = giveGiftMap.get(p1).filter((el) => el === p2).length; // p1이 p2에게 준 횟수
            const p2_p1 = giveGiftMap.get(p2).filter((el) => el === p1).length; // p2가 p1에게 준 횟수
            // 주고 받은 선물 횟수가 더 큰 사람에게 선물 주기
            if(p1_p2 > p2_p1) {
                nextMonthGetCnt.set(p1, nextMonthGetCnt.get(p1)+1);
            } else if (p1_p2 < p2_p1){
                nextMonthGetCnt.set(p2, nextMonthGetCnt.get(p2)+1);
            } else { 
                // 주고 받은 선물 횟수가 없거나 같은 경우
                const p1Percent = giftPercent.get(p1);
                const p2Percent = giftPercent.get(p2);
                
                // 선물 지수 비교 후 더 큰 사람에게 선물 주기
                if(p1Percent > p2Percent) {
                    nextMonthGetCnt.set(p1, nextMonthGetCnt.get(p1)+1);
                }else if(p1Percent < p2Percent){
                    nextMonthGetCnt.set(p2, nextMonthGetCnt.get(p2)+1);
                }
            }
        }
    }
    
    return (Math.max(...nextMonthGetCnt.values()));
}