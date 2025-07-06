function solution(video_len, pos, op_start, op_end, commands) {
    const stringToNumber = (str) => {
        str = str.split(':').map(Number);
        
        return str[0]*60 + str[1];
    }
    
    video_len = stringToNumber(video_len);
    pos = stringToNumber(pos);
    op_start = stringToNumber(op_start);
    op_end = stringToNumber(op_end);
    
    if(pos >= op_start && pos <= op_end) pos = op_end;
    
    for(const cmd of commands){
        if(cmd === 'next') pos += 10;
        if(cmd === 'prev') pos -= 10;
        
        if(pos < 0) pos = 0;
        if(pos > video_len) pos = video_len;
        
        if(pos >= op_start && pos <= op_end) pos = op_end;
    }
    
    const min = Math.floor(pos / 60).toString().padStart(2,0);
    const sec = (pos % 60).toString().padStart(2,0);
    
    return `${min}:${sec}`;
}