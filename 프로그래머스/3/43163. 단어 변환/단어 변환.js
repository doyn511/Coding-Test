/**
조건 : 한번에 한 개의 알파벳만 변경 가능
구하는 값 : 최소 몇단계의 과정을 거치는지 (변환할 수 없는 경우 -> 0 리턴)

0을 리턴하는 경우
- words에 targeet값이 없을 때
- 변환 중간에 더이상 변환할 수 없을 떄

한 개의 알파벳만 변경가능 -> 철자 하나만 다른지 체크하는 함수 구현 (t/f return)
bfs 이용해서 구현해보기
*/

/** 현재 단어와 연결되어있는 (1자만 다른) word list를 구하는 함수*/
const checkIsConnect = (cur, word) => {
    let diff = 0;
    
    for(let i = 0; i < cur.length; i++){
        if(cur[i] !== word[i]) diff++;
    }
    return diff === 1 ? true : false;
}

    
function solution(begin, target, words) {
    const queue = [];
    const visited = {};
    
    queue.push(begin);
    visited[begin] = 0;
    
    while(queue.length > 0){
        const cur = queue.shift();
        
        if(cur === target) break;
        
        for(const word of words){
            if(checkIsConnect(cur, word) && !visited[word]){
                visited[word] = visited[cur] + 1;
                queue.push(word);
            }
        }
    }
    return visited[target] ? visited[target] : 0;
}







