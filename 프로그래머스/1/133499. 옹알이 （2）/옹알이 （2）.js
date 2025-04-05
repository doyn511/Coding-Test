// 같은 단어 반복 X, 단어의 조합으로만 말하기 가능
function solution(babbling) {
    const words = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for(let word of babbling){    
        for(let i = 0; i < words.length; i++){
            // 같은 단어가 2번 반복될 때
            if(word.includes(words[i].repeat(2))){
                break;
            }
            
            // word[i]를 기준으로 split하면 word[i]를 제외한 값들만 남게됨
            word = word.split(words[i]).join(' ');
        }
        
        if(word.split(' ').join('').length === 0) answer++;
    }
    
    return answer;
}