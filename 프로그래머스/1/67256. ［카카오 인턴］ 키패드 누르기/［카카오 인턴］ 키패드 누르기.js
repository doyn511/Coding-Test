/*
1,4,7 -> 왼손
3,6,9 -> 오른손
2,5,8,0 -> 위치 상 더 가까운 손으로 (같을 경우 hand에 따라)
*/
function solution(numbers, hand) {
    let answer = '';
   
    const position = {1: [0,0], 2: [0,1], 3: [0,2], 4: [1,0], 5: [1,1], 6: [1,2], 7: [2,0], 8: [2,1], 9: [2,2], '*':[3,0], 0: [3,1], '#': [3,2]};
    
    let leftPos = '*'
    let rightPos = '#'
    
    const findDist = (num, rH, lH, hand) => {
        // 맨해튼 거리 공식 : [px, py], [qx, qy] => |px-qx| + |py-qy|
        const rightDist = Math.abs(position[rH][0] - position[num][0]) + Math.abs(position[rH][1] - position[num][1]);
        const leftDist = Math.abs(position[lH][0] - position[num][0]) + Math.abs(position[lH][1] - position[num][1]);
        
        if(rightDist === leftDist){
            return hand === 'right' ? 'R' : 'L';
        }
        
        return rightDist < leftDist ? 'R' : 'L';
    }
    
    for(const target of numbers){
        if(target === 1 || target === 4 || target === 7){
            answer += 'L';
            leftPos = target;
        }else if(target === 3 || target === 6 || target === 9){
            answer += 'R';
            rightPos = target;
        }else{
            const res = findDist(target, rightPos, leftPos, hand);
            res === 'L' ? leftPos = target : rightPos = target;
            answer += res;
        }
    }
    
    return answer;
}