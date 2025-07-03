function solution(wallpaper) {
    const xPos = []; 
    const yPos = [];
    
    const xLen = wallpaper[0].length;
    const yLen = wallpaper.length;
    
    for(let i = 0; i < yLen; i++){
        for(let j =0; j < xLen; j++){
            if(wallpaper[i][j] === '#'){
                xPos.push(i);
                yPos.push(j);
            }
        }
    }
    
    // 파일의 좌표 중 최대, 최소 값 구하기
    xPos.sort((a,b) => a-b);
    yPos.sort((a,b) => a-b);
    
    // lux, luy -> x,y 중 가장 작은 값 , rdx, rdy -> x,y중 가장 큰 값 + 1
    return [xPos[0], yPos[0], xPos[xPos.length-1]+1, yPos[yPos.length-1]+1]
}