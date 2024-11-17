function solution(x) {
    let div = 0
    
    x.toString().split('').forEach((item) => div += (+item));
    
    return x%div === 0;
}