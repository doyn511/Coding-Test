/*
배열 순서대로 처리 시 총 실행시간 구하기
J 5
J P 10
J P S 15
P S J 16
S J P 17
J P S 18
P S J 19
S J P 20
J P S 21

*/

function solution(cacheSize, cities) {
    let time = 0;
    const cache = [];
    cities = cities.map((el) => el.toLowerCase());

    if(cacheSize === 0){
        time = cities.length * 5;
        return time;
    }
    
    // cache에는 도시가 들어온 순서대로 업데이트 됨
    for(const city of cities){
        const idx = cache.indexOf(city);
        // cache hit인 경우, time + 1
        if(idx !== -1){
            time += 1;
            cache.push(cache.splice(idx, 1)[0]);
        }else{
            // cache miss인 경우, time + 5
            
            if(cache.length === cacheSize){
                cache.shift();
            }
            time += 5;
            cache.push(city);
        }
    }
    return time;
}