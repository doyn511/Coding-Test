function solution(array, height) {
    let seq = 0;
    array.sort();
    array.forEach((item) => {
        if(item > height){
            seq +=1;
        }
    })
    return seq;
}