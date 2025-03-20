/**
1. 장르 별 재생된 횟수대로 줄 세우기
2. 장르 내에서 가장 많이 재생된 노래대로 줄세우기 (고유번호랑 같이) -> 장르별로..
*/
function solution(genres, plays) {
    const answer = [];
    
    const playTimeSet = {};
    for(let i = 0; i < genres.length; i++){
        playTimeSet[genres[i]] = (playTimeSet[genres[i]] | 0) + plays[i];
    }
    const playTime = Object.entries(playTimeSet).sort((a,b) => b[1] - a[1]);
    
    for(let i = 0 ; i < playTime.length; i++){
        const curGenre = playTime[i][0];
        
        const songs = [];
        genres.forEach((cur, idx) => {
            if(cur === curGenre){
                songs.push([plays[idx],idx]);
            }
        })
        
        if(songs.length > 1){
            songs.sort((a,b) => b[0]-a[0]);
            answer.push(+songs[0][1],+songs[1][1]);
        }else{
            answer.push(+songs[0][1]);
        }
    }
    
    return answer;
    
}