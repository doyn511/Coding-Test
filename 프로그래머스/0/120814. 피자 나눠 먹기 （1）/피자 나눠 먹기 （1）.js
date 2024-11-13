function solution(n) {
    const min = n%7 === 0 ? parseInt(n/7) : parseInt(n/7)+1;
    return min;
}