function solution(phone_number) {
    let res = '';
    const arr = phone_number.split('');
    arr.splice(0, arr.length-4);
    
    for(let i = 0; i <= phone_number.length-5; i++){
        res+= '*';
    }
    
    res+= arr.join('');
    
    return res;

}