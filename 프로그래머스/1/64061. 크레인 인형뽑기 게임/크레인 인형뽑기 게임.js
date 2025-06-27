function solution(board, moves) {
    const grid = [];
    const n = board.length;
    const stack = [];
    let count = 0;
    
    // grid 생성
    for(let i = 0; i < n; i++){
        const tmp = [];
        for(let j = 0; j < n; j++){
            if(board[j][i] !== 0) tmp.push(board[j][i]);
        }
        grid.push(tmp);
    }
    
    // moves 탐색
    moves.forEach((m) => {
        if(grid[m-1].length !== 0){
            if(stack[stack.length-1] === grid[m-1][0]){
                stack.pop();
                count += 2;
            }else{
                stack.push(grid[m-1][0]);
            }
            grid[m-1].shift();
        }
    })
    
    return count;
    
}