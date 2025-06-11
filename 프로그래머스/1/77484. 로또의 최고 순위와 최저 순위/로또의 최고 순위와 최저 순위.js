function findRanking (score) {
    switch(score){
        case 6: 
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}

function solution(lottos, win_nums) {
    const answer = [];

    let min = lottos.filter((num) => win_nums.includes(num)).length;
    let max = min + lottos.filter((num) => num === 0).length;
    
    answer.push(findRanking(max));
    answer.push(findRanking(min));

    return answer;
}