/**
- 자판 키 -> 최소 1개 ~ 최대 100개
- 같은 문자가 자판 전체에 여러번 할당된 경우 O
- 키 하나에 같은 문자가 여러번 할당된 경우 O
- 아예 할당되지 않은 경우 O -> 문자열 작성 불가능일수도 있음

구하는 값: 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야하는지 / 작성할 수 없을 땐 -1
*/

function solution(keymap, targets) {
    const answer = [];
    const map = new Map();
    
    keymap.forEach((key) => {
        for(let i = 0; i < key.length; i++){
            if(!map.has(key[i])){
                map.set(key[i], i+1);
            }else{
                map.set((key[i]), Math.min(i+1, map.get(key[i])));
            }
        }
    })
    
    targets.forEach((str) => {
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(map.has(str[i])){
                count += map.get(str[i]);
            }else{
                count = -1;
                break;
            }
        }
        
        answer.push(count);
    })
    
    return answer;
}