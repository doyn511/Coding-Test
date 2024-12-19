function solution(s) {
    const strArr = s.split(' ');
    
    for(let i = 0 ; i <= strArr.length-1; i++){
        let wordArr = strArr[i].split('');
        
        for(let j = 0; j <= wordArr.length-1; j++){
            wordArr[j] = j === 0? wordArr[j].toUpperCase() : wordArr[j].toLowerCase();
        }
        strArr[i] = wordArr.join('');
    }
    return strArr.join(' ')
}
