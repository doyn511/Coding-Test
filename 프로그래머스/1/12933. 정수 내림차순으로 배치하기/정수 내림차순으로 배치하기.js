function solution(n) {
    const sortN = n.toString().split('').sort((a,b) => b-a);
    return Number(sortN.join(''));
}