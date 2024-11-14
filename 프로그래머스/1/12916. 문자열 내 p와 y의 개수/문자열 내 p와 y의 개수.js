function solution(s){
    let pnum = 0, ynum = 0;
    
    s.toLowerCase().split('').forEach((item) => {
        item === 'p' && pnum++;
        item === 'y' && ynum++;
    });
    
    return pnum === ynum ? true : false;
}