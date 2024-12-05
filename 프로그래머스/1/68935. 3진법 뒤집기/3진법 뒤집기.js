function solution(n) {
    const trit = n.toString(3).split('');
    let reverseN = 0;
    
    for(let i = 0; i <= trit.length-1; i++){
        reverseN += Math.pow(3, i) * trit[i];
    }
    
    return reverseN;
}