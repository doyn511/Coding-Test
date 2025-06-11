/**
알파벳 순으로 s에 있는 문자열 모두 index만큼 뒤에 있는 문자로 변환
skip에 있는 애들은 빼고 indxx 세기
*/
function solution(s, skip, index) {
    const answer = [];
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    
    s = s.split('');
    skip = skip.split('');
    
    const available = ALPHABET.split('').filter((el) => !skip.includes(el));
    const lastIdx = available.length;
    
    for(let i = 0 ; i < s.length; i++){
        let curIdx = available.indexOf(s[i]);
        const newIdx = (curIdx + index) % lastIdx;
        answer.push(available[newIdx]);
    }
    return answer.join('');
}