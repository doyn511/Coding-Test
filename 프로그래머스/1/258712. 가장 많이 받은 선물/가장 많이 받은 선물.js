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
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friend1 = friends[i];
            const friend2 = friends[j];
            
            // friend1이 friend2에게 준 선물 개수
            const friend1ToFriend2 = giveGiftMap.get(friend1).filter(name => name === friend2).length;
            // friend2가 friend1에게 준 선물 개수
            const friend2ToFriend1 = giveGiftMap.get(friend2).filter(name => name === friend1).length;
            
            if (friend1ToFriend2 > friend2ToFriend1) {
                // friend1이 더 많이 줬으면 friend1이 받음
                nextMonthGetCnt.set(friend1, nextMonthGetCnt.get(friend1) + 1);
            } else if (friend2ToFriend1 > friend1ToFriend2) {
                // friend2가 더 많이 줬으면 friend2가 받음
                nextMonthGetCnt.set(friend2, nextMonthGetCnt.get(friend2) + 1);
            } else {
                // 주고받은 수가 같거나 둘 다 0이면 선물지수 비교
                const friend1Percent = giftPercent.get(friend1);
                const friend2Percent = giftPercent.get(friend2);
                
                if (friend1Percent > friend2Percent) {
                    nextMonthGetCnt.set(friend1, nextMonthGetCnt.get(friend1) + 1);
                } else if (friend2Percent > friend1Percent) {
                    nextMonthGetCnt.set(friend2, nextMonthGetCnt.get(friend2) + 1);
                }
                // 선물지수도 같으면 아무도 선물을 주지 않음
            }
        }
    }
    
    // 가장 많이 받을 선물의 수 반환
    return Math.max(...nextMonthGetCnt.values());
}