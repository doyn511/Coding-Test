function solution(n)
{
    const nArr = n.toString().split('');
    let sum = 0;
    
    nArr.forEach((item) => sum += Number(item));
    return sum;
}